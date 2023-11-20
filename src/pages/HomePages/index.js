import HeroContent from "../../components/HeroContent";
import ListMenu from "../../components/ListMenu";
import { MenuCard } from "../../components/MenuIcon";
import Slides from "../../components/SwiperSlides";

const HomePages = () => {
  return (
    <div>
      <HeroContent />
      <div className="md:container mx-auto p-3">
        <div>
          <ListMenu title="เมนูแนะนำ" subTitle="Recommend Menu" />
          <div className="grid grid-cols-7 max-xl:grid-cols-3 max-md:grid-cols-2 w-100">
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>
        <div>
          <ListMenu title="เติมตรงเข้าบัญชี" subTitle="Top up directly" />
          <Slides />
        </div>
        <div>
          <ListMenu title="บัตรเติมเงิน" subTitle="Card online" />
        </div>
        <div>
          <ListMenu
            title="โปรโมชั่น - ข่าวสาร"
            subTitle="Promotions and News"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePages;
