"use client";

import React, { useEffect, useState } from "react";
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
    "https://script.google.com/macros/s/AKfycbyyNaI4HqvFmP-Zz13PfSoN_t88yJ3IO_03X0tfwbhqQgyX4ga0rICQp89lh1tGWvCeHQ/exec";
  const options = [
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
  ];

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

      setPeople(post);
      setstatus(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || studentId.length<11 || !selectedFaculty || !selectedOption || !tel) {
      seterror("โปรดกรอกข้อมูลให้ครับถ้วน");
      return;
    }
    fetchData();
    if (people[selectedOption+1]?.register >= selectedOption ){
      seterror("จุดที่ท่านเลือกเต็มแล้ว กรุณาเลือกจุดใหม่")
      return;
    }

    try {
      setstatus(true);
      let body = {
        name: name,
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
        setStudentId("");
        alert("ยืนยันการสมัครเสร็จสิ้น");
      } else {
        alert("มีปัญหาการเชื่อมต่อโปรดติดต่อ admin");
      }
    } catch (error) {
      console.log("error", error);
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
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        ระบบ รับสมัครนักศึกษาช่วยงานขอนแก่นมาราธอน ฝ่ายบริการน้ำนักวิ่ง 2025
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            ชื่อ:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="กรอกชื่อ"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="studentId"
            className="block text-gray-700 font-medium mb-2"
          >
            รหัสนักศึกษา: (ตัวอย่าง 66123456-7)
          </label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={handleInputChange}
            placeholder="กรอกรหัสนักศึกษา"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tel" className="block text-gray-700 font-medium mb-2">
            เบอร์โทรศัพท์:
          </label>
          <input
            type="text"
            id="tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            placeholder="กรอกเบอร์โทรศัพท์"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          
          />
        </div>
        <div className="mb-4 relative">
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full p-3 text-left border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
          >
            {selectedFaculty || "เลือกคณะ"}
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
          <h3 className="text-lg font-semibold mb-3">เลือกจุดที่รับ</h3>
          {options.map((option) => (
            <div key={option.value} className="mb-4">
              <input
                disabled={option.participants >= option.count}
                type="radio"
                id={option.value}
                name="workOption"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={option.value}>{option.label}</label>

              <div className="text-sm text-gray-500 mt-2">
                {option.work && <p>หน้าที่: {option.work}</p>}
                <p>จุดที่รับ: {option.location}</p>
                <p>
                  จำนวนผู้รับ: {option.participants}/ {option.count} คน
                </p>
                <p>ค่าตอบแทน: {option.salary} บาท</p>
                <p>ช่วงเวลาที่ทำงาน: {option.time}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          disabled={status}
          type="submit"
          className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {status ? "กำลังส่งข้อมูล" : "ยืนยันการสมัคร"}
        </button>
        {error  && <p className="mt-[12px] text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default StudentForm;
