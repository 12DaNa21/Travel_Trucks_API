import { lazy, Suspense } from "react";
import Layout from "../Layout/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import Spiner from "../Spiner/Spiner.jsx";
import css from "./App.module.css";

const HomePage = lazy(() => import("../HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("../CatalogPage/CatalogPage.jsx"));
const CamperCard = lazy(() => import("../CamperCard/CamperCard.jsx"));

function App() {
  return (
    <div className={css.main}>
      <Layout>
        <Suspense
          fallback={
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Spiner width="100" height="100" color="var(--Raiting)" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperCard />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
