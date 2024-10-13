import css from "./ConveyanceFilter.module.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllTrucksForFirstPage } from "../../../redux/catalog/operations.js";
import {
  selectAC,
  selectBathroom,
  selectForm,
  selectKitchen,
  selectTransmission,
  selectTV,
  selectRadio,
} from "../../../redux/filter/selectors.js";
import {
  setForm,
  setTransmission,
  toggleAC,
  toggleBathroom,
  toggleKitchen,
  toggleTV,
  toggleRadio,
} from "../../../redux/filter/slice.js";
import toast from "react-hot-toast";
import { selectIsLoading } from "../../../redux/catalog/selectors.js";
import Spiner from "../../Spiner/Spiner.jsx";
import ThreeSqares from "../../../helpers/icons/ThreeSqares.jsx";
import EightSqares from "../../../helpers/icons/EightSqares.jsx";
import FourSqares from "../../../helpers/icons/FourSqares.jsx";
import Droplet from "../../../helpers/icons/Droplet.jsx";
import TV from "../../../helpers/icons/TVicons.jsx";
import Cup from "../../../helpers/icons/Cup.jsx";
import Diagram from "../../../helpers/icons/Diagram.jsx";
import WindAC from "../../../helpers/icons/WindAC.jsx";
import Radio from "../../../helpers/icons/Radio.jsx";

export default function ConveyanceFilter() {
  const form = useSelector(selectForm);
  const AC = useSelector(selectAC);
  const transmission = useSelector(selectTransmission);
  const kitchen = useSelector(selectKitchen);
  const tv = useSelector(selectTV);
  const bathroom = useSelector(selectBathroom);
  const isLoading = useSelector(selectIsLoading);
  const radio = useSelector(selectRadio);
  const dispath = useDispatch();

  async function getAllTrucks() {
    try {
      await dispath(fetchAllTrucksForFirstPage()).unwrap();

      toast.success("Trucks loaded successfully!");
    } catch {
      toast.error("Trucks not found!");
    }
  }
  return (
    <div className={css.conatiner}>
      <h3 className={css.title}>Filters</h3>

      <h2 className={css.scndTitle}>Vehicle equipment</h2>

      <div className={css.equipment}>
        <div
          className={AC ? css.eqItemActive : css.eqItem}
          onClick={() => dispath(toggleAC())}
        >
          <WindAC />
          <p className={css.itemText}>AC</p>
        </div>
        <div
          className={transmission ? css.eqItemActive : css.eqItem}
          onClick={() => dispath(setTransmission())}
        >
          <Diagram />
          <p className={css.itemText}>Automatic</p>
        </div>
        <div
          className={kitchen ? css.eqItemActive : css.eqItem}
          onClick={() => dispath(toggleKitchen())}
        >
          <Cup />
          <p className={css.itemText}>Kitchen</p>
        </div>
        <div
          className={tv ? css.eqItemActive : css.eqItem}
          onClick={() => dispath(toggleTV())}
        >
          <TV />
          <p className={css.itemText}>TV</p>
        </div>
        <div
          className={bathroom ? css.eqItemActive : css.eqItem}
          onClick={() => dispath(toggleBathroom())}
        >
          <Droplet />
          <p className={css.itemText}>Bathroom</p>
        </div>
        <div
          className={radio ? css.eqItemActive : css.eqItem}
          onClick={() => dispath(toggleRadio())}
        >
          <Radio />
          <p className={css.itemText}>Radio</p>
        </div>
      </div>

      <h2 className={css.scndTitle}>Vehicle type</h2>
      <div className={css.type}>
        <div
          className={form === "panelTruck" ? css.typeItemActive : css.typeItem}
          onClick={() =>
            form === "panelTruck"
              ? dispath(setForm(""))
              : dispath(setForm("panelTruck"))
          }
        >
          <ThreeSqares />
          <p className={css.itemText}>Van</p>
        </div>
        <div
          className={
            form === "fullyIntegrated" ? css.typeItemActive : css.typeItem
          }
          onClick={() =>
            form === "fullyIntegrated"
              ? dispath(setForm(""))
              : dispath(setForm("fullyIntegrated"))
          }
        >
          <EightSqares />
          <p className={css.itemText}>Fully Integrated</p>
        </div>
        <div
          className={form === "alcove" ? css.typeItemActive : css.typeItem}
          onClick={() =>
            form === "alcove"
              ? dispath(setForm(""))
              : dispath(setForm("alcove"))
          }
        >
          <FourSqares />
          <p className={css.itemText}>Alcove</p>
        </div>
      </div>

      <button
        className={css.searchBtn}
        onClick={getAllTrucks}
        disabled={isLoading}
      >
        {isLoading ? (
          <Spiner width={20} height={20} color="var(--White)" />
        ) : (
          "Search"
        )}
      </button>
    </div>
  );
}
