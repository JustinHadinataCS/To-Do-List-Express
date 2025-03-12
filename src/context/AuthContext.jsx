import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe(); // Properly cleanup subscription
  }, []);

  async function handleEmailSignIn({ e, navigateTo }) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!email || !password) {
        throw new Error("Please fill in all fields");
      }

      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in successfully");

      // Reset email and password after successful login
      setEmail("");
      setPassword("");

      // Navigate if function is provided
      if (navigateTo && typeof navigateTo === "function") {
        navigate("/todo");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Failed to log in. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn({ navigateTo }) {
    setError("");
    setLoading(true);

    try {
      await signInWithPopup(auth, googleProvider);
      console.log("Signed in with Google");

      // Navigate if function is provided
      if (navigateTo && typeof navigateTo === "function") {
        navigate("/todo");
      }
    } catch (err) {
      console.error("Google Sign-in error:", err);
      setError(err.message || "Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    setError("");
    setLoading(true);
    navigate("/");
    try {
      await signOut(auth);
      console.log("Successfully logged out");
    } catch (err) {
      console.error("Logout error:", err);
      setError(err.message || "Failed to log out. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  async function handleEmailSignUp({ e, confirmPassword }) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!name || !email || !password || !confirmPassword) {
        throw new Error("Please fill in all fields");
      }

      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account created successfully");
    } catch (err) {
      console.error("Sign-up error:", err);
      setError(err.message || "Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const value = {
    user,
    loading,
    error,
    email,
    password,
    setEmail,
    setPassword,
    logout,
    handleEmailSignIn,
    handleGoogleSignIn,
    handleEmailSignUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { useAuth, AuthProvider };
