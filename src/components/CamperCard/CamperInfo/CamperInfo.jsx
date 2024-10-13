import { useSelector } from "react-redux";
import css from "./CamperInfo.module.css";
import { selectTruck } from "../../../redux/catalog/selectors.js";
import TruckDetails from "../../TruckDetails/TruckDetails.jsx";
import CamperDetails from "../CamperDetails/CamperDetails.jsx";

export default function CamperInfo() {
  const data = useSelector(selectTruck);
  return (
    <>
      {data ? (
        <div className={css.container}>
          <CamperDetails data={data} />
          <TruckDetails />
        </div>
      ) : null}
    </>
  );
}
