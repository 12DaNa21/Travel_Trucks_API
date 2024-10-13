import { useParams } from "react-router-dom";
import css from "./CamperCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTruckById } from "../../redux/catalog/operations.js";
import CamperTitle from "./CamperTitle/CamperTitle.jsx";
import Photo from "./Photo/Photo.jsx";
import CamperDescription from "./CamperDescription/CamperDescription.jsx";
import { selectIsLoadingTruck } from "../../redux/catalog/selectors.js";
import Spiner from "../Spiner/Spiner.jsx";

export default function CamperCard() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingTruck);

  useEffect(() => {
    if (id) {
      dispatch(fetchTruckById(id));
    }
  }, [id, dispatch]);

  if (isLoading) {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Spiner width="100" height="100" color="var(--Rating)" />
      </div>
    );
  }

  return (
    <div className={css.container}>
      <CamperTitle />
      <Photo />
      <CamperDescription />
    </div>
  );
}
