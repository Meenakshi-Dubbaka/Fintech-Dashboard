import { useContext } from "react";
import { AppContext } from "../context/AppContext";
export default function Navbar() {
  const { role, setRole } = useContext(AppContext);

  const toggleRole = () => {
    setRole((prev) => (prev === "viewer" ? "admin" : "viewer"));
  };

  return (
    <div className="navbar">
      <h1 className="navbar-title">Finance Dashboard</h1>

      <div className="navbar-right">
        {/* Viewer */}
        <span
          className={`role-label ${role === "viewer" ? "active-role" : ""}`}
        >
          Viewer
        </span>

        {/* Toggle */}
        <div
          className={`toggle ${role === "admin" ? "active" : ""}`}
          onClick={toggleRole}
        >
          <div className="toggle-circle"></div>
        </div>

        {/* Admin */}
        <span className={`role-label ${role === "admin" ? "active-role" : ""}`}>
          Admin
        </span>
      </div>
    </div>
  );
}
