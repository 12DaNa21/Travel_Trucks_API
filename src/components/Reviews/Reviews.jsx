import { useSelector } from "react-redux";
import css from "./Reviews.module.css";

import { selectTruck } from "../../redux/catalog/selectors.js";
import Comments from "../Comments/Comments.jsx";

export default function Reviews() {
  const data = useSelector(selectTruck);
  return (
    <>
      {data ? (
        <div className={css.conatiner}>
          {data.reviews
            ? data.reviews.map((item, index) => (
                <Comments data={item} key={index} />
              ))
            : null}
        </div>
      ) : null}
    </>
  );
}
