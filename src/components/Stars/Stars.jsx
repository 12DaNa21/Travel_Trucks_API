import OrangeStar from "../../helpers/icons/OrangeStar";
import Star from "../../helpers/icons/Star";
import css from "./Stars.module.css";

export default function Stars({ count }) {
  const totalStars = 5;

  const stars = Array.from({ length: totalStars }, (_, index) => {
    return index < count ? <OrangeStar key={index} /> : <Star key={index} />;
  });

  return <div className={css.container}>{stars}</div>;
}
