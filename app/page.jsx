"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
function StudentForm() {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [tel, setTel] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [people, setPeople] = useState("");
  const [status, setstatus] = useState(true);
  const [error, seterror] = useState("");

  const url =
    "https://script.google.com/macros/s/AKfycbyS3ZHlejKccCgp8pFeHsaA1-d7Ela0UnpKsAFYOy8_62xjRC_wIIqBpyh7uPJWDvqnqw/exec";
  const options = Object.freeze([
    {
      value: "1",
      label: "W1",
      location: "ตลาดต้นตาล",
      salary: "500 บาท",
      time: "00.00 น. - 07.30 น.",
      count: 12,
      participants: [people[0]?.register],
    },
    {
      value: "2",
      label: "W2",
      location: "ประตูน้ำขอนแก่น",
      salary: "500 บาท",
      time: "00.00 น. - 07.30 น.",
      count: 11,
      participants: [people[1]?.register],
    },
    {
      value: "3",
      label: "W3",
      location: "จุดกลับสะพานกาฬสินธุ์ฝั่งซ้ายมือ",
      salary: "500 บาท",
      time: "00.00 น. - 07.30 น.",
      count: 10,
      participants: [people[2]?.register],
    },
    {
      value: "4",
      label: "W4",
      location: "โรงแรม 99 รีสอท",
      salary: "500 บาท",
      time: "00.00 น. - 07.30 น.",
      count: 17,
      participants: [people[3]?.register],
    },
    {
      value: "5",
      label: "W5",
      location: "หลังวัดหนองแวงบึงแก่นนคร",
      salary: "500 บาท",
      time: "00.00 น. - 07.30 น.",
      count: 10,
      participants: [people[4]?.register],
    },
    {
      value: "6",
      label: "W6",
      location: "โรงเรียนเทศบาลสวนสนุก",
      salary: "500 บาท",
      time: "00.00 น. - 07.30 น.",
      count: 10,
      participants: [people[5]?.register],
    },
    {
      value: "7",
      label: "W7",
      location: "ข้าง ร.ร. อนุบาลขอนแก่น",
      salary: "500 บาท",
      time: "00.00 น. - 07.30 น.",
      count: 10,
      participants: [people[6]?.register],
    },
    {
      value: "8",
      label: "W8",
      location: "เทคโนโลยีบริหาร (K-BAC)",
      salary: "600 บาท",
      time: "00.00 น. - 09.30 น.",
      count: 10,
      participants: [people[7]?.register],
    },
    {
      value: "9",
      label: "W9",
      location: "โรงเรียนขามแก่นนคร",
      salary: "600 บาท",
      time: "00.00 น. - 09.30 น.",
      count: 17,
      participants: [people[8]?.register],
    },
    {
      value: "10",
      label: "W10",
      location: "มหาชัยกรุ๊ป สาขาศิลา",
      salary: "600 บาท",
      time: "00.00 น. - 09.30 น.",
      count: 10,
      participants: [people[9]?.register],
    },
    {
      value: "11",
      label: "W11",
      location: "แยกเคียมห้วย",
      salary: "600 บาท",
      time: "00.00 น. - 09.30 น.",
      count: 10,
      participants: [people[10]?.register],
    },
    {
      value: "12",
      label: "W12",
      location: "จุดกลับรถ กม.26",
      salary: "600 บาท",
      time: "00.00 น. - 09.30 น.",
      count: 10,
      participants: [people[11]?.register],
    },
    {
      value: "13",
      label: "W13",
      location: "จุดกลับรถ กม.28",
      salary: "600 บาท",
      time: "00.00 น. - 09.30 น.",
      count: 17,
      participants: [people[12]?.register],
    },
    {
      value: "14",
      label: "W14",
      location: "ก่อนถึงสะพานข้ามทางรถไฟเลี่ยงเมือง",
      salary: "600 บาท",
      time: "00.00 น. - 09.30 น.",
      count: 10,
      participants: [people[13]?.register],
    },
    {
      value: "15",
      label: "W15",
      location: "ใต้สะพานมิตรภาพ",
      salary: "600 บาท",
      time: "00.00 น. - 09.30 น.",
      count: 10,
      participants: [people[14]?.register],
    },
    {
      value: "16",
      label: "W16",
      location: "ตรงข้ามสหกรณ์ออมทรัพย์ครู จังหวัดขอนแก่น",
      salary: "700 บาท",
      time: "00.00 น. - 11.30 น.",
      count: 25,
      participants: [people[15]?.register],
    },
    {
      value: "17",
      label: "W17",
      location: "ศูนย์วิจัยพืชไร่",
      salary: "700 บาท",
      time: "00.00 น. - 11.30 น.",
      count: 18,
      participants: [people[16]?.register],
    },
    {
      value: "18",
      label: "W18",
      location: "สโมสรนักศึกษาข้างคอมแพล็ค มข.",
      salary: "700 บาท",
      time: "00.00 น. - 11.30 น.",
      count: 22,
      participants: [people[17]?.register],
    },
    {
      value: "19",
      label: "W19",
      location: "ศาลารถข้างสวนเกษตร",
      salary: "700 บาท",
      time: "00.00 น. - 11.30 น.",
      count: 22,
      participants: [people[18]?.register],
    },
    {
      value: "20",
      label: "W20",
      location: "หน้าการไฟฟ้าส่วนภูมิภาคจังหวัดขอนแก่น 2",
      salary: "500 บาท",
      time: "00.00 น. - 07.30 น.",
      count: 12,
      participants: [people[19]?.register],
    },
    {
      value: "21",
      label: "W21",
      location: "กลุ่มส่งเสริมสหกรณ์",
      salary: "500 บาท",
      time: "00.00 น. - 07.30 น.",
      count: 14,
      participants: [people[20]?.register],
    },
    {
      value: "22",
      label: "W22",
      location: "หน้าโชว์รูมรถ Hyundai",
      salary: "500 บาท",
      time: "00.00 น. - 07.30 น.",
      count: 14,
      participants: [people[21]?.register],
    },
    {
      value: "23",
      label: "W23",
      location: "ก่อนถึงวงเวียนคณะมนุษย์ศาสตร์",
      salary: "500 บาท",
      time: "00.00 น. - 07.30 น.",
      count: 17,
      participants: [people[22]?.register],
    },
    {
      value: "24",
      label: "W24",
      location: "หน้าสนาม 50 ปี มข.",
      salary: "500 บาท",
      time: "00.00 น. - 07.30 น.",
      count: 11,
      participants: [people[23]?.register],
    },
    {
      value: "25",
      label: "W25",
      location: "หน้าเส้นชัย (หลังหอกาล)",
      salary: "700 บาท",
      time: "00.00 น.- 11.30 น.",
      count: 14,
      participants: [people[24]?.register],
    },
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(url, {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }

      const post = await res.json();
      setstatus(false);
      setPeople(post);
      return post;
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      studentId.length < 11 ||
      !selectedFaculty ||
      !selectedOption ||
      !tel
    ) {
      seterror("โปรดกรอกข้อมูลให้ครบถ้วน");
      return;
    }

    const post = await fetchData();
    setstatus(true);
    if (
      post[selectedOption - 1]?.register >= options[selectedOption - 1]?.count
    ) {
      seterror("จุดที่ท่านเลือกเต็มแล้ว กรุณาเลือกจุดใหม่");
      return;
    }
    try {
      const body = {
        name,
        studentid: studentId,
        tel: ":" + tel,
        location: selectedOption,
        faculty: selectedFaculty,
      };

      const res = await fetch(url, {
        method: "POST",
        body: new URLSearchParams(body),
      });

      if (res.ok) {
        setName("");
        setTel("");
        fetchData();
        setStudentId("");
        alert("ยืนยันการสมัครเสร็จสิ้น");
      } else {
        seterror("มีปัญหาการเชื่อมต่อโปรดติดต่อ admin");
      }
    } catch (error) {
      seterror("เกิดข้อผิดพลาด: " + error.message);
    } finally {
      setstatus(false);
    }
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e) => {
    let value = e.target.value;
    if (/[^0-9-]/.test(value)) return;
    if (value.length > 11) return;
    if (value.length === 10 && !value.includes("-")) {
      value = value.slice(0, 9) + "-" + value.slice(9);
    }

    setStudentId(value);
  };

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <Image
        alt="background1"
        className="absolute top-0 right-0 w-[100px] md:w-[300px]"
        src="/img/bg-top-right1.png"
        width={300}
        height={450}
      ></Image>
      <Image
        alt="background1"
        className="absolute top-[800px] left-0 w-[45px]  md:w-[122px]"
        src="/img/bg-center-right1.png"
        width={382}
        height={463}
      ></Image>
      <Image
        alt="background1"
        className="absolute top-[2200px] right-0 w-[45px]  md:w-[92px]"
        src="/img/bg-buttom-right1.png"
        width={382}
        height={463}
      ></Image>

      <div className="z-5 relative mx-auto my-[100px] p-6 rounded-lg max-w-[650px]">
        <h2 className="text-[30px] sm:text-[34px] font-normal text-center mb-2">
          รับสมัครนักศึกษาช่วยงาน
        </h2>
        <p className="text-center text-[14px] sm:text-[17px] font-normal mx-auto max-w-[420px] text-[#545454] mb-12">
          แบบฟอร์มรับสมัครนักศึกษาช่วยฝ่ายบริการน้ำนักวิ่งในงาน KHONKEAN
          MARATHON 2025 ในวันที่ 12 มกราคม 2025
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-[19px] font-normal mb-2"
            >
              <span className="text-[#545454]">ชื่อ</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-[#F0F0F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="studentId"
              className="block text-gray-700 font-medium mb-2"
            >
              <span className="text-[#545454]">รหัสนักศึกษา</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="studentId"
              value={studentId}
              onChange={handleInputChange}
              className="w-full p-3  bg-[#F0F0F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-10">
            <label
              htmlFor="tel"
              className="block text-gray-700 font-medium mb-2"
            >
              <span className="text-[#545454]">เบอร์โทรศัพท์</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className="w-full p-3  bg-[#F0F0F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="z-10 relative translate-x-[25px] translate-y-[12px] max-w-[120px] bg-white px-[12px] text-center text-[#545454]">
            <p>คณะ/วิทยาลัย</p>
          </div>
          <div className="mb-16 relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full py-[15px] px-[15px] text-left border border-[#545454] border-[2px] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
            >
              {" "}
              <div className="flex items-center gap-x-[20px] text-[#545454]">
                {" "}
                <Image
                  className="w-[20px] h-[16px]"
                  src="/img/Faculty.png"
                  width={20}
                  height={20}
                  alt="faculty"
                ></Image>
                {selectedFaculty || "--- ยังไม่ได้เลือก ---"}
              </div>
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 w-full mt-2 bg-white shadow-lg rounded-lg">
                <ul className="p-3 text-sm text-gray-700">
                  {[
                    "คณะเกษตรศาสตร์",
                    "คณะเทคโนโลยี",
                    "คณะวิศวกรรมศาสตร์",
                    "คณะวิทยาศาสตร์",
                    "คณะสถาปัตยกรรมศาสตร์",
                    "คณะพยาบาลศาสตร์",
                    "คณะแพทย์ศาสตร์",
                    "คณะเทคนิคการแพทย์",
                    "คณะสาธารณะสุขศาสตร์",
                    "คณะทันตแพทย์ศาสตร์",
                    "คณะศึกษาศาสตร์",
                    "คณะมนุษย์ศาสตร์และสังคมศาสตร์",
                    "คณะบริหารธุรกิจและการบัญชี",
                    "คณะศิลปกรรมศาสตร์",
                    "คณะเศรษฐศาสตร์",
                    "วิทยาลัยนานาชาติ",
                    "คณะนิติศาสตร์",
                    "วิทยาลัยการปกครองท้องถิ่น",
                    "วิทยาลัยการคอมพิวเตอร์",
                  ].map((faculty, index) => (
                    <li key={index}>
                      <button
                        type="button"
                        className="w-full text-left p-2 hover:bg-gray-100"
                        onClick={() => {
                          setSelectedFaculty(faculty);
                          setDropdownOpen(false);
                        }}
                      >
                        {faculty}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="mb-6">
            <h3 className=" font-normal text-center text-[25px] mb-6">
              เลือกจุดที่สมัคร
            </h3>
            <div className="max-w-[540px] h-[2px] bg-black mx-auto mb-8"></div>
            {options.map((option) => (
              <div
                key={option.value}
                className={
                  option.value % 2 != 0
                    ? "mb-8 py-[18px] px-[25px] flex justify-between items-center bg-[#F0F0F0]"
                    : " py-[18px] px-[25px] flex justify-between items-center  mb-8"
                }
              >
                <div>
                  <div className="flex gap-y-[12px]">
                    <input
                      disabled={option.participants >= option.count}
                      type="radio"
                      id={option.value}
                      name="workOption"
                      value={option.value}
                      checked={selectedOption === option.value}
                      onChange={handleChange}
                      className="mr-3"
                    />

                    <label htmlFor={option.value} className="flex flex-col">
                      <div className="flex gap-x-[10px] text-[14px] sm:text-[20px]">
                        <h2>{option.label}</h2>
                        <h2>{option.location}</h2>
                      </div>
                      <div className="text-[0.68rem] sm:text-[0.85rem] mt-[2px] flex sm:flex-row flex-col gap-[5px] text-gray-500 mt">
                        {option.work && <p>หน้าที่: {option.work}</p>}
                        <p>
                          ค่าตอบแทน: 
                          <span className="block ml-[2px] sm:inline">
                            {option.salary}
                          </span>
                        </p>
                        <p>
                          ช่วงเวลา: 
                          <span className="block ml-[2px]  sm:inline">
                            {option.time} บาท
                          </span>
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="min-w-[50px] max-w-[70px]">
                  {" "}
                  <p className="text-[0.8rem] sm:text-[1rem] text-center">
                    จำนวนผู้รับ {option.participants}/ {option.count} คน
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            disabled={status}
            type="submit"
            className="w-full bg-[#F06F58] text-white p-3 rounded-lg hover:bg-[#CF5E4A] transition duration-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {status ? "กำลังส่งข้อมูล" : "ยืนยันการสมัคร"}
          </button>
          {error && <p className="mt-[12px] text-red-500">{error}</p>}
        </form>
      </div>
      <footer className=" relative text-center mt-[45px] text-black border-t mx-auto border-gray-300">
        <div className="z-20 relative">
          <p className="text-[12px] sm:text-[13px] mt-6">
            This website was created by{" "}
            <a
              href="https://github.com/toomtoomluvcat"
              target="_blank"
              className="hover:text-[#CF5E4A] transition duration-200 underline"
            >
              Toomluvcat
            </a>
          </p>
          <p className="mt-2 pb-8 text-[10px] sm:text-[10px]">
            Developed using Google script React and Next.js (v13.5).
          </p>
        </div>
        <Image
          alt="background1"
          className="absolute z-0 bottom-0 right-0 bottom-0 left-0 w-[200px] sm:[250px] xl:w-[500px]"
          src="/img/bg-buttom-right2.png"
          width={1319}
          height={1173}
        />
      </footer>
    </div>
  );
}

export default StudentForm;
