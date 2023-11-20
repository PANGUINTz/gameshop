import { Routes, Route } from "react-router-dom";
import Header from "./Headers";
import Footer from "./Footer";
import HomePages from "../pages/HomePages";
import PromotionPages from "../pages/PromotionPages";
import About from "../pages/AboutPages";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePages />} />
        <Route path="/promotions" element={<PromotionPages />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/*" element={<NotFoundPages />} />
      </Routes>
      <Footer />
    </div>
  );
};

const NotFoundPages = () => {
  console.log("Not found");
  return (
    <div>
      <h1 className="text-3xl p-5 w-fit mx-auto">PAGE NOT FOUND !!!</h1>
    </div>
  );
};

export default MainLayout;
