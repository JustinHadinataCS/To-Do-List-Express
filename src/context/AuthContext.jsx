import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(function () {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe;
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
    } catch (err) {
      console.error("Logged in error:", err);
      setError(err.message || "Failed to log in. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    setLoading(true);
    try {
      setTimeout(() => {
        setLoading(false);
        console.log("Signed up with Google");
      }, 1000);
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  }
  async function logout() {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    } finally {
      console.log("Succesfully logged out");
    }
  }
  const value = {
    user,
    loading,
    error,
    email,
    password,
    setEmail,
    setLoading,
    setPassword,
    logout,
    handleEmailSignIn,
    handleGoogleSignIn,
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
