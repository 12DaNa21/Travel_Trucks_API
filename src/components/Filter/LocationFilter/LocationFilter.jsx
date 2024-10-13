import Map from "../../../helpers/icons/Map";
import MapActive from "../../../helpers/icons/MapActive";
import { selectLocation } from "../../../redux/filter/selectors";
import { setLocation } from "../../../redux/filter/slice";
import css from "./LocationFilter.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function LocationFilter() {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);

  function handleEnterLocation(e) {
    const value = e.target.value.trim();
    dispatch(setLocation(value));
  }

  return (
    <div className={css.location}>
      <label htmlFor="location" className={css.label}>
        Location
      </label>
      <input
        type="text"
        id="location"
        className={css.locationInput}
        placeholder="City"
        onChange={handleEnterLocation}
        value={location}
      />
      <div className={css.locationWrapper}>
        {location ? (
          <div className={css.locationActiveIcon}>
            <MapActive width={20} height={20} />
          </div>
        ) : (
          <div className={css.locationIcon}>
            <Map width={20} height={20} />
          </div>
        )}
      </div>
    </div>
  );
}
