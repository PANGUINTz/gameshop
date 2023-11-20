import React from "react";
import { Collapse } from "antd";

const index = () => {
  const items = [
    {
      key: "1",
      label: "Termgame24 คืออะไร",
      children: (
        <p>
          Termgame24 คือสุดยอดแพลตฟอร์มสำหรับเกมเมอร์ที่รวบรวมเกมดัง
          โปรโมชั่นสุดคุ้มเพื่อคุณคนพิเศษ และสิทธิพิเศษอื่นๆ
          อีกมากมายในราคาสุดคุ้มค่า
        </p>
      ),
    },
    {
      key: "2",
      label: "เติมแล้วจะได้ item ตอนไหน",
      children: (
        <p>ได้รับ item ทันทีหลังยืนยันการชำระเงินด้วยเครดิตบนเว็บไซต์</p>
      ),
    },
    {
      key: "3",
      label:
        "หากยืนยันชำระเงินเรียบร้อยแล้ว แต่ต้องการเปลี่ยนหรือคืนสามารถทำได้หรือไม่",
      children: (
        <p>
          เมื่อทำการชำระเงินเสร็จสมบูรณ์แล้วจะไม่สามารถเปลี่ยน ยกเลิก
          หรือขอคืนรายการเติมเกมทุกรายการได้คะ
        </p>
      ),
    },
    {
      key: "4",
      label: "หากมีปัญหาเกี่ยวกับการชำระเงิน สามารถติดต่อได้ที่ไหนบ้าง",
      children: <p>สามารถติดต่อผ่าน Line offical @termgame24</p>,
    },
    {
      key: "5",
      label: "Termgame24 coin(TG coin) คืออะไร",
      children: (
        <p>
          คุณจะได้รับ 1 TG coin ในทุกๆการใช้จ่าย 100 บาท TG coin
          สามารถใช้ร่วมกิจกรรมกับทาง Termgame24 ได้ TG coin หมดอายุทุกวันที่ 30
          มิถุนายนและ 31 ธันวาคม ของทุกปี
        </p>
      ),
    },
    {
      key: "6",
      label: "Web Browser ที่แนะนำสำหรับการใช้งาน",
      children: <p>Chrome / Safari</p>,
    },
    {
      key: "7",
      label: "สามารถแจ้งปัญหาการใช้งานได้ที่ไหนบ้าง",
      children: <p>สามารถติดต่อผ่าน Line offical @termgame24 ได้ตลอด 24ชม.</p>,
    },
    {
      key: "8",
      label: "วิธีการเปลี่ยนพาสเวิร์ด",
      children: (
        <div>
          <p>1.กดที่เมนูด้านบน</p>
          <p>2.เลือกเมนูตั้งค่าสมาชิก</p>
          <p>3.กดที่เมนูสมาชิก</p>
          <p>4.กดเลือกเปลี่ยนรหัสผ่าน</p>
        </div>
      ),
    },
    {
      key: "9",
      label: "สามารถเติมเงินผ่าน QR Code ผ่านธนาคารอะไรได้บ้าง",
      children: (
        <p>
          ทุกแอปธนาคาร หรือ e-Wallet (กระเป๋าเงินออนไลน์)
          ที่สมารถสแกนจ่ายเพื่อชำระเงินได้
        </p>
      ),
    },
  ];
  return (
    <div className="grid grid-cols-2">
      <div className="px-5 mr-5 text-white">
        <h2 className="text-2xl">Termgame24</h2>
        <p className="text-sm mt-3">
          ยินดีต้อนรับสู่แพลตฟอร์ม Termgame24 อันดับหนึ่งของประเทศไทย
          ที่รวบรวมเกมทุกประเภทไว้ที่นี่พร้อมประสบการณ์เกมรูปแบบใหม่
          ที่จะทำให้ทุกเกมเล่นสนุกสุดหัวใจในสไตล์ของคุณเอง
        </p>
        <p className="text-sm mt-3">
          ยิ่งเพิ่ม ยิ่งเลเวลอัพ ของแถมอีกมากมายที่คอเกมไม่ควรพลาด
        </p>
        <p className="text-sm mt-3">
          คุ้มค่ามากขึ้นกับส่วนลดเพิ่มขึ้นทุกการเติมเงิน
        </p>
        <p className="text-sm mt-3">รวดเร็วและง่ายดายเพียงปลายนิ้วสัมผัส</p>
        <p className="text-sm mt-3">เข้าร่วมกับเรา (ตัวแทนจำหน่าย)</p>
        <p className="text-sm mt-3">
          ต้องการสร้างรายได้กับการเติมเกมของคุณหรือไม่? ร่วมเป็นหนึ่งกับ
          Termgame24 ติดต่อเราได้ที่ Line offical <span>@termgame24</span>
        </p>
        <h1 className="text-xl mt-3">ติดตั้งแอปพลิเคชั่น</h1>
        <img
          src="https://www.termgame24.com/assets/images/icons/google_play.png?v=1"
          alt="GooglePlay"
          style={{ width: "168px" }}
        />
        <p className="text-sm">
          เพิ่มความรวดเร็วในการสั่งซ์้อสินค้าของเราได้ทุกที่ทุกเวลา
          ดาวน์โหลดแอปตอนนี้!
        </p>
      </div>
      <div>
        <h1 className="text-2xl text-white">FAQs</h1>
        <p className="text-xl p-2 text-blue-300 border-b-4 border-blue-300 w-fit cursor-pointer">
          FOR GAMES
        </p>
        <div className="border border-slate-600" />
        <div className="mt-5">
          <Collapse accordion items={items} />
        </div>
      </div>
    </div>
  );
};

export default index;
