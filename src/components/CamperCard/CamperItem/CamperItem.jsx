import css from "./CamperItem.module.css";
import CamperDetails from "../CamperDetails/CamperDetails.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteList } from "../../../redux/favorite/selectors.js";
import { toggleFavorite } from "../../../redux/favorite/slice.js";
import OrangeHeart from "../../../helpers/icons/OrangeHeart.jsx";
import Heart from "../../../helpers/icons/Heart.jsx";
import OrangeStar from "../../../helpers/icons/OrangeStar.jsx";
import MapActive from "../../../helpers/icons/MapActive.jsx";

export default function CamperItem({ data }) {
  const dispatch = useDispatch();
  const favoriteList = useSelector(selectFavoriteList);
  const isFavorite = favoriteList.includes(data.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(data.id));
  };

  return (
    <div className={css.container}>
      <img
        src={data.gallery[0].thumb}
        alt="truck photo"
        className={css.photo}
      />
      <div className={css.data}>
        <div className={css.head}>
          <h2 className={css.name}>{data.name}</h2>
          <div className={css.priceWrapper}>
            <p className={css.price}>€{data.price}.00</p>
            <div onClick={handleFavoriteClick}>
              {isFavorite ? (
                <OrangeHeart width="26" height="24" />
              ) : (
                <Heart width="26" height="24" />
              )}
            </div>
          </div>
        </div>

        <div className={css.rating}>
          <span className={css.text}>
            <div className={css.star}>
              <OrangeStar />
            </div>
            {`${data.rating}(${data.reviews.length} Reviews)`}
          </span>
          <span className={css.location}>
            <MapActive width={16} height={16} />
            {data.location}
          </span>
        </div>

        <p className={css.description}>{data.description}</p>
        <CamperDetails data={data} />
        <Link to={`/catalog/${data.id}`} className={css.showMoreBtn}>
          Show more
        </Link>
      </div>
    </div>
  );
}
