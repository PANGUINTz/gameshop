import React from "react";
import { Icon } from "../components/MenuIcon";
import {
  FileText,
  ThumbsUp,
  Package,
  CheckCircle,
  Facebook,
  Youtube,
  Instagram,
  ChevronRight,
  Send,
} from "react-feather";

const Footer = () => {
  let role = "admin";
  return (
    <div className="background-footer py-5">
      {role === "admin" && <div></div>}
      <div className="md:container mx-auto">
        <p className="text-white text-4xl text-center">ทำไมต้องเติมเกมผ่าน</p>
        <p className="text-center text-2xl text-white">
          <span className="text-yellow-500">TERM</span>
          <span className=" text-blue-500">GAME</span>24
        </p>
        <div className="grid grid-cols-4 my-10 max-md:grid-cols-2">
          <Icon icon={<FileText />} menu="สมัครใช้งานง่าย" />
          <Icon icon={<ThumbsUp />} menu="ให้ราคาคุ้มที่สุด" />
          <Icon icon={<Package />} menu="ได้รับสินค้าทันที" />
          <Icon icon={<CheckCircle />} menu="ปลอดภัยไร้กังวล" />
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-1">
          <div className="px-12">
            <img
              src=" https://www.termgame24.com/assets/images/logo.png?v=10"
              alt="logo"
              style={{ width: "210px" }}
            />
            <p className=" text-white text-sm">
              <span className="text-lg font-bold">ร้านเติมเกม24 </span>
              เป็นเพียงตัวแทนจำหน่ายเท่านั้น
              ไม่มีส่วนเกี่ยวข้องกับองค์กรหรือบุคคลใดๆที่แอบอ้างใช้ชื่อบัญชีธนาคารร้านเติมเกม24
              เครดิตในเว็บไซต์ใช้สำหรับซื้อสินค้าภายในเว็บไซต์ termgame24.com
              เท่านั้น
              โปรดระวังมิจฉาชีพแอบอ้างบัญชีเราเพื่อหลอกให้ผู้อื่นจ่ายค่าสินค้าแทน
            </p>
            <p className="text-white font-bold text-lg my-5">
              Follow Us On Social
            </p>
            <div className="flex text-white">
              <Facebook className="mr-2" />
              <Youtube className="mx-2" />
              <Instagram className="mx-2" />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="max-lg:my-5 max-lg:px-12">
              <p className="text-white font-bold text-xl">บริการของเรา</p>
              <li className="flex cursor-pointer my-3 hover-text">
                <ChevronRight />
                บัตรเติมเงิน
              </li>
              <li className="flex cursor-pointer my-3 hover-text">
                <ChevronRight />
                เติมเกมออนไลน์
              </li>
              {/* <li className="flex cursor-pointer my-3 hover-text">
                <ChevronRight />
                เติมเงินมือถือ - เติมโปรเน็ต
              </li> */}
            </div>
            <div className="max-lg:my-5 max-lg:px-12">
              <p className="text-white font-bold text-xl">สิทธิพิเศษ</p>
              <li className="flex cursor-pointer my-3 hover-text">
                <ChevronRight />
                TG VIP
              </li>
              <li className="flex cursor-pointer my-3 hover-text">
                <ChevronRight />
                TG COIN
              </li>
            </div>
          </div>
          <div className="max-lg:my-5 max-lg:px-12">
            <p className="text-white font-bold text-xl">ติดต่อเรา</p>
            <div className="flex">
              <div className="flex w-fit p-2 box-message mr-1">
                <Send /> แจ้งเหตุขัดข้อง
              </div>
              <div className="flex w-fit p-2 box-message">
                <Facebook /> ติดตามข่าวสาร
              </div>
            </div>
            <div className="mt-5">
              <p className="text-white font-bold text-xl">แอพพลิเคชั่น</p>
              <div className="flex">
                <img
                  src="https://www.termgame24.com/assets/images/icons/google_play.png?v=1"
                  alt="GooglePlay"
                  style={{ width: "168px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-between my-5 px-12">
          <div>
            <p className="text-white">สงวนสิทธิ์โดยกูเอง ©2023 PANGUINTz</p>
          </div>
          <div className="flex text-white">
            <p className="mx-3">เงื่อนไขข้อตกลง</p>
            <p>นโยบายความเป็นส่วนตัว</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
