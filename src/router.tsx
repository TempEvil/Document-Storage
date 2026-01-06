import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Component
import Navbar from "./components/views/Navbar";
import Loading from "./components/common/Loading/Loading";
// Route
const Home = lazy(() => import("./views/Home"));
const Document = lazy(() => import("./views/document/Document"));
const DocumentDetail = lazy(() => import("./views/document/DocumentDetail"));
const AboutUs = lazy(() => import("./views/AboutUs"));

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/document" element={<Document />} />
          <Route path="/document/:id" element={<DocumentDetail />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
