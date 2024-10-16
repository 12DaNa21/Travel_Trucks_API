import { useSelector } from "react-redux";
import css from "./Photo.module.css";
import { selectTruck } from "../../../redux/catalog/selectors.js";

export default function Photo() {
  const data = useSelector(selectTruck);
  return (
    <>
      {data ? (
        <div className={css.container}>
          {data.gallery
            ? data.gallery.map((item, index) => (
                <img
                  src={item.original}
                  alt="trucks photo"
                  key={index}
                  className={css.photo}
                />
              ))
            : null}
        </div>
      ) : null}
    </>
  );
}
