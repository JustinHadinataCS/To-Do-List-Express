import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Simple() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleEmailSignUp() {
    console.log("Sign-up button clicked!");
    await createUserWithEmailAndPassword(auth, email, password);
  }
  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="bg-black text-white"
        value={email}
        placeholder="you@example.com"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="bg-black text-white"
        type="password"
        placeholder="hello123..."
      />
      <button onClick={handleEmailSignUp} className="bg-black text-white">
        Sign in
      </button>
    </div>
  );
}

export default Simple;
