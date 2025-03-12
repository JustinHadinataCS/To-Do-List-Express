// App.jsx
import { useState } from "react";
import Item from "./Item";
import { Button } from "./components/ui/button";
import AuthPage from "./components/LogInPage";
import SignUpPage from "./components/SignUpPage";
import Simple from "./components/Simple";
import LoginPage from "./components/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <p>Error</p>,
    children: [{ path: "", element: <LoginPage /> }],
  },
]);
function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    // <div className="p-10">
    //   <Button className="shadow-md">Hello</Button>
    // </div>
    // <div className="max-w-3xl mx-auto p-6">
    //   <div className="mb-6">
    //     <h1 className="text-2xl font-bold mb-4">To-Do List Application</h1>
    //     <p className="text-gray-600 mb-4">Justin Hadinata - 2702298236</p>

    //     <form className="flex gap-2" onSubmit={handleSubmit}>
    //       <input
    //         type="text"
    //         placeholder="Add new task..."
    //         className="flex-grow p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
    //         onChange={(e) => setName(e.target.value)}
    //         value={name}
    //       />
    //       <button
    //         type="submit"
    //         className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded shadow transition duration-200"
    //         onClick={handleSubmit}
    //       >
    //         Add Task
    //       </button>
    //     </form>
    //   </div>

    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //     {items.map((item) => (
    //       <Item
    //         key={item.id}
    //         id={item.id}
    //         name={item.name}
    //         items={items}
    //         onItems={setItems}
    //         onName={setName}
    //       />
    //     ))}
    //   </div>
    // </div>
  );
}

export default App;
