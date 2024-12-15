import React from "react";
import Image from "next/image";

function Confrim() {
  return (
    <div className="fixed inset-0 m-auto">
      <div className="flex flex-col items-center h-screen justify-center">
        <div className="bg-white border-[2px] border-black px-[25px] py-[15px] rounded-[15px] ">
          <div>
            <h2 className="text-center text-[30px]">ส่งข้อมูลสำเร็จ</h2>
            <div className="text-[25px] text-center">
              <span className="text-red-500">*สำคัญ* </span>
              <span>กรุณากดปุ่มด้านล่างหรือแสกน QR CODE เข้ากลุ่มไลน์ </span>
            </div>
          </div>
          <Image
            scr=""
            width={500}
            height={300}
            alt="qrcode"
            className="my-[20px] w-[300px] mx-auto h-[300px]"
            src="/img/QRCODE.jpg"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Confrim;
