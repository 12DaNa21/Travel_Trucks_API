import Cup from "../../../helpers/icons/Cup";
import Diagram from "../../../helpers/icons/Diagram";
import Droplet from "../../../helpers/icons/Droplet";
import Petrol from "../../../helpers/icons/Petrol";
import Radio from "../../../helpers/icons/Radio";
import TVicons from "../../../helpers/icons/TVicons";
import WindAC from "../../../helpers/icons/WindAC";

import css from "./CamperDetails.module.css";

export default function TruckOption({ data }) {
  return (
    <div className={css.container}>
      {data.transmission === "automatic" ? (
        <div className={css.optionItem}>
          <Diagram width={20} height={20} />
          <p className={css.optionText}>Automatic</p>
        </div>
      ) : null}
      {data.AC ? (
        <div className={css.optionItem}>
          <WindAC width={20} height={20} />
          <p className={css.optionText}>AC</p>
        </div>
      ) : null}
      {data.gas ? (
        <div className={css.optionItem}>
          <Petrol width={20} height={20} />
          <p className={css.optionText}>Petrol</p>
        </div>
      ) : null}
      {data.kitchen ? (
        <div className={css.optionItem}>
          <Cup width={20} height={20} />
          <p className={css.optionText}>Kitchen</p>
        </div>
      ) : null}
      {data.radio ? (
        <div className={css.optionItem}>
          <Radio width={20} height={20} />
          <p className={css.optionText}>Radio</p>
        </div>
      ) : null}
      {data.bathroom ? (
        <div className={css.optionItem}>
          <Droplet width={20} height={20} />
          <p className={css.optionText}>Bathroom</p>
        </div>
      ) : null}
      {data.TV ? (
        <div className={css.optionItem}>
          <TVicons width={20} height={20} />
          <p className={css.optionText}>TV</p>
        </div>
      ) : null}
    </div>
  );
}
