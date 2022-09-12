import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
//styles
import "./Navbar.css";
import Temple from "../assets/temple.svg";
export default function Navbar() {
  const { logout, error, isPending } = useLogout();
  const { user } = useAuthContext();
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="dojo logo"></img>
          <span>The Dojo</span>
        </li>

        {!user && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        {!user && (
          <li>
            <NavLink to="/signup">signup</NavLink>
          </li>
        )}
        {user && (
          <li>
            {!isPending && (
              <button className="btn" onClick={logout}>
                Logout
              </button>
            )}
            {isPending && (
              <button className="btn" disabled>
                Logging out...
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}
