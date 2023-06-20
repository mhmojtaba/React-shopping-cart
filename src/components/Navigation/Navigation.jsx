import { NavLink, Outlet } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <header className="bg-zinc-400 h-20">
        <nav className="h-full">
          <ul className="flex items-center justify-center h-full">
            <li className="block mx-6">
              <NavLink className="inline-block  text-xl" to="/">
                Home
              </NavLink>
            </li>
            <li className="block mx-6">
              <NavLink className="inline-block text-xl" to="/carts">
                Cart
              </NavLink>
            </li>
            <li className="block mx-6">
              <NavLink className="inline-block text-xl" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
