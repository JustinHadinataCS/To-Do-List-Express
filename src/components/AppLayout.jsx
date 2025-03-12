import { AuthProvider } from "@/context/AuthContext";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}

export default AppLayout;
