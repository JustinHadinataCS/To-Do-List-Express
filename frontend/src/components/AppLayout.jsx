import { Outlet, Link, useNavigate } from "react-router-dom";

function AppLayout() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/todos">ToDoList</Link>
        </div>
        <div className="space-x-4">
          {!token ? (
            <>
              <Link to="/signup" className="hover:underline">
                Sign Up
              </Link>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className="hover:underline">
              Logout
            </button>
          )}
        </div>
      </nav>

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
