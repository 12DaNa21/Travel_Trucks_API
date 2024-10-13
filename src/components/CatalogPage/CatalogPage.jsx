import { useDispatch } from "react-redux";
import Filter from "../Filter/Filter.jsx";
import CamperList from "../CamperList/CamperList.jsx";
import css from "./CatalogPage.module.css";
import { useEffect } from "react";
import { fetchAllTrucksForFirstPage } from "../../redux/catalog/operations.js";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrucksForFirstPage());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <Filter />
      <CamperList />
    </div>
  );
}
