import { useDispatch, useSelector } from "react-redux";
import css from "./CamperList.module.css";
import {
  selectAllTrucks,
  selectHasMore,
  selectIsLoading,
} from "../../redux/catalog/selectors.js";
import { fetchAllTrucks } from "../../redux/catalog/operations.js";
import CamperItem from "../CamperCard/CamperItem/CamperItem.jsx";
import toast from "react-hot-toast";
import Spiner from "../Spiner/Spiner.jsx";

export default function CamperList() {
  const dispatch = useDispatch();
  const hasNextPage = useSelector(selectHasMore);
  const trucks = useSelector(selectAllTrucks);
  const isLoading = useSelector(selectIsLoading);

  async function getNextPageTrucks() {
    try {
      await dispatch(fetchAllTrucks()).unwrap();
      toast.success("Trucks loaded successfully!");
    } catch {
      toast.error("Trucks not found!");
    }
  }
  return (
    <div className={css.container}>
      {trucks.length > 0
        ? trucks.map((item) => <CamperItem key={item.id} data={item} />)
        : null}
      {hasNextPage ? (
        <button
          className={css.loadMore}
          onClick={getNextPageTrucks}
          disabled={isLoading}
        >
          {isLoading ? (
            <Spiner width="20" height="20" color="var(--Black)" />
          ) : (
            "Load more"
          )}
        </button>
      ) : null}
    </div>
  );
}
