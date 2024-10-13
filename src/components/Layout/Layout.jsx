import { Toaster } from "react-hot-toast";
import NavBar from "../NavBar/NavBar.jsx";
import css from "./Layout.module.css";
export default function Layout({ children }) {
  return (
    <div className={css.main}>
      <NavBar />
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
