import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";
import logo from "../../helpers/images/Logo.png";
import logo2x from "../../helpers/images/Logo@2x.png";

export default function NavBar() {
  return (
    <div className={css.container}>
      <NavLink to="/" end>
        <picture>
          <source srcSet={`${logo2x} 2x`} />
          <img src={logo} alt="logotype" className={css.img} />
        </picture>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? css.activeLink : css.link)}
        to="/"
        end
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? css.activeLink : css.link)}
        to="/catalog"
        end
      >
        Catalog
      </NavLink>
    </div>
  );
}
