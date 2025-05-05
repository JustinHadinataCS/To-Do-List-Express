import { useState } from "react";

function Simple() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <button className="bg-black text-white">Sign in</button>
    </div>
  );
}

export default Simple;
