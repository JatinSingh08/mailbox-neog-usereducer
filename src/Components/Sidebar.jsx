import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const getActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
      borderRight: isActive ? "4px solid black" : "none"
    };
  };
  return (
    <nav className="sidebar">
      <NavLink style={getActiveStyle} to="/">
        Inbox
      </NavLink>

      <NavLink style={getActiveStyle} to="/spam">
        Spam
      </NavLink>

      <NavLink style={getActiveStyle} to="/trash">
        Trash
      </NavLink>
    </nav>
  );
}
