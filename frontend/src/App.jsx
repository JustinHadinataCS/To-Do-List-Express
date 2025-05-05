import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./components/HomePage";
import TodolistPage from "./components/TodolistPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <p>Error</p>,
    children: [{ path: "", element: <TodolistPage /> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
