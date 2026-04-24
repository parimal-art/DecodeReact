import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaPhone } from "react-icons/fa";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded transition ${
      isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <nav className="flex gap-4 p-4 shadow bg-white">
      <NavLink to="/" className={linkClass}>
        <FaHome /> Home
      </NavLink>

      <NavLink to="/about" className={linkClass}>
        <FaUser /> About
      </NavLink>

      <NavLink to="/contact" className={linkClass}>
        <FaPhone /> Contact
      </NavLink>
    </nav>
  );
}