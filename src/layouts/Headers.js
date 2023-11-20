import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentToken,
} from "../features/auth/authSlice";

import { Fade as Hamburger } from "hamburger-react";

const Header = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const [isOpen, setOpen] = useState(false);
  const [scroll, setScroll] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const controlNavbar = () => {
      if (window.scrollY > 1) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };

    if (windowWidth > 1024) {
      setOpen(false);
    }

    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [windowWidth]);

  return (
    <div
      className={
        scroll ? `background-navbar py-5` : `background-navbar py-5 active`
      }
    >
      {/* Desktop */}
      <div className="sm:container mx-auto grid grid-cols-3 max-lg:flex max-lg:justify-between">
        <div>
          <img
            src=" https://www.termgame24.com/assets/images/logo.png?v=10"
            alt="logo"
            style={{ width: "148px" }}
          />
        </div>

        <div className="my-auto font-bold text-xl text-center max-md:hidden max-xl:text-base max-lg:hidden">
          <Link to="/" className="mx-3 hover-text">
            หน้าหลัก
          </Link>
          <Link to="/promotions" className="mx-3 hover-text">
            โปรโมชั่น
          </Link>
          <Link to="/" className="mx-3 hover-text">
            เติมเงิน
          </Link>
          <Link to="/about-us" className="mx-3 hover-text">
            เกี่ยวกับเรา
          </Link>
        </div>

        {user && token ? (
          { user }
        ) : (
          <div className="my-auto w-full flex justify-end max-lg:hidden">
            <div className="text-xl p-2 border-customize w-fit rounded-lg">
              เข้าสู่ระบบ หรือ ลงทะเบียน
            </div>
          </div>
        )}
        <div className="lg:hidden my-auto z-10">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <div
        className={
          isOpen
            ? "h-screen bg-slate-500 w-[280px] fixed z-10 right-0 ease-in-out duration-300 mt-5"
            : "h-screen bg-slate-500 fixed z-10 right-[-15rem] w-0 duration-700 mt-5"
        }
      >
        <div className="flex flex-col p-5">
          <Link to="/" className="m-3 hover-text">
            หน้าหลัก
          </Link>
          <Link to="/" className="m-3 hover-text">
            โปรโมชั่น
          </Link>
          <Link to="/" className="m-3 hover-text">
            เติมเงิน
          </Link>
          <Link to="/" className="m-3 hover-text">
            เกี่ยวกับเรา
          </Link>
        </div>
        <div className="mx-auto m-3 p-3 border-customize w-fit rounded-lg">
          เข้าสู่ระบบ หรือ ลงทะเบียน
        </div>
      </div>
    </div>
  );
};
export default Header;
