import Stars from "../Stars/Stars";
import css from "./Comments.module.css";

export default function Comments({ data }) {
  return (
    <>
      {data ? (
        <div className={css.container}>
          <div className={css.personWrapper}>
            <div className={css.avatar}>
              {data.reviewer_name.charAt(0).toUpperCase()}
            </div>
            <div className={css.person}>
              <p className={css.name}>{data.reviewer_name}</p>
              <Stars count={data.reviewer_rating} />
            </div>
          </div>
          <p className={css.comment}>{data.comment}</p>
        </div>
      ) : null}
    </>
  );
}
