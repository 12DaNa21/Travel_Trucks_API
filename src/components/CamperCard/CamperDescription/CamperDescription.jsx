import { useSelector } from "react-redux";
import css from "./CamperDescription.module.css";
import { selectTruck } from "../../../redux/catalog/selectors.js";
import { useState } from "react";
import CamperInfo from "../CamperInfo/CamperInfo.jsx";
import Reviews from "../../Reviews/Reviews.jsx";
import Form from "../../Form/Form.jsx";

export default function CamperDescription() {
  const [isLinkActive, setIsLinkActive] = useState("features");
  const data = useSelector(selectTruck);
  return (
    <>
      {data ? (
        <div className={css.container}>
          <p className={css.description}>{data.description}</p>
          <div className={css.info}>
            <div className={css.links}>
              <span
                className={css.features}
                onClick={() => setIsLinkActive("features")}
              >
                Features
              </span>
              <span
                className={css.reviews}
                onClick={() => setIsLinkActive("reviews")}
              >
                Reviews
              </span>
              <div
                className={
                  isLinkActive === "features"
                    ? css.underlineRight
                    : css.underlineLeft
                }
              ></div>
            </div>
          </div>
          <div className={css.infoWrapper}>
            <div className={css.detailsReviews}>
              {isLinkActive === "features" ? <CamperInfo /> : <Reviews />}
            </div>
            <Form />
          </div>
        </div>
      ) : null}
    </>
  );
}
