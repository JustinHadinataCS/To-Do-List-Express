import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import TodolistPage from "./components/TodolistPage";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <p>Error</p>,
    children: [
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/todos",
        element: (
          <ProtectedRoute>
            <TodolistPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
