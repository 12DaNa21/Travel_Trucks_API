import css from "./CamperTitle.module.css";
import { useSelector } from "react-redux";
import { selectTruck } from "../../../redux/catalog/selectors.js";
import OrangeStar from "../../../helpers/icons/OrangeStar.jsx";
import MapActive from "../../../helpers/icons/MapActive.jsx";

export default function CamperTitle() {
  const data = useSelector(selectTruck);
  return (
    <>
      {data ? (
        <div className={css.container}>
          <h2 className={css.name}>{data.name}</h2>
          <div className={css.rating}>
            <span className={css.text}>
              <div className={css.star}>
                <OrangeStar />
              </div>
              <span className={css.reviews}>{`${data.rating}(${
                data.reviews ? data.reviews.length : null
              } Reviews)`}</span>
            </span>
            <span className={css.location}>
              <MapActive width={16} height={16} />
              {data.location}
            </span>
          </div>
          <p className={css.price}>€{data.price}.00</p>
        </div>
      ) : null}
    </>
  );
}
