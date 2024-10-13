import LocationFilter from "./LocationFilter/LocationFilter.jsx";
import ConveyanceFilter from "./ConveyanceFilter/ConveyanceFilter.jsx";
import styles from "./Filter.module.css";

export default function Filter() {
  return (
    <div className={styles.container}>
      <LocationFilter />
      <ConveyanceFilter />
    </div>
  );
}
