import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  const linkClass = (path: string) =>
    location.pathname === path
      ? "bg-blue-500 text-white p-3 rounded-lg"
      : "p-3 hover:bg-gray-200 rounded-lg";

  return (
    <div className="w-[250px] bg-gray-100 h-screen p-6">
      <nav className="flex flex-col space-y-4">
        <Link to="/" className={linkClass("/")}>
          Home
        </Link>
        <Link to="/classes" className={linkClass("/classes")}>
          Classes
        </Link>
        <Link to="/substitute-class" className={linkClass("/substitute-class")}>
          Substitute Class
        </Link>
        <Link
          to="/profile-documents"
          className={linkClass("/profile-documents")}
        >
          Profile & Documents
        </Link>
      </nav>
    </div>
  );
};
