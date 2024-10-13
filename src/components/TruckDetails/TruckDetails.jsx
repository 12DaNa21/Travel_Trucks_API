import { useSelector } from "react-redux";
import css from "./TruckDetails.module.css";
import { selectTruck } from "../../redux/catalog/selectors.js";
import formatCamperForm from "../../helpers/utils/formatCamperForm.js";
import formatQuantity from "../../helpers/utils/formatQuantity.js";

export default function TruckDetails() {
  const data = useSelector(selectTruck);
  return (
    <>
      {data ? (
        <div className={css.container}>
          <h2 className={css.title}>Vehicle details</h2>
          <ul className={css.list}>
            <li className={css.item}>
              <span className={css.text}>Form</span>
              <span className={css.text}>
                {data.form ? formatCamperForm(data.form) : null}
              </span>
            </li>
            <li className={css.item}>
              <span className={css.text}>Length</span>
              <span className={css.text}>
                {data.length ? formatQuantity(data.length) : null}
              </span>
            </li>
            <li className={css.item}>
              <span className={css.text}>Width</span>
              <span className={css.text}>
                {data.width ? formatQuantity(data.width) : null}
              </span>
            </li>
            <li className={css.item}>
              <span className={css.text}>Height</span>
              <span className={css.text}>
                {data.height ? formatQuantity(data.height) : null}
              </span>
            </li>
            <li className={css.item}>
              <span className={css.text}>Tank</span>
              <span className={css.text}>
                {data.tank ? formatQuantity(data.tank) : null}
              </span>
            </li>
            <li className={css.item}>
              <span className={css.text}>Consumption</span>
              <span className={css.text}>{data.consumption}</span>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
