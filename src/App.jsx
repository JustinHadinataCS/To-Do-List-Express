// App.jsx
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./components/HomePage";
import TodolistPage from "./components/TodolistPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <p>Error</p>,
    children: [
      { path: "", element: <TodolistPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/", element: <HomePage /> },
    ],
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
  );
}

export default App;
