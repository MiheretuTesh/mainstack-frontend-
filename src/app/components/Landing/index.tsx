"use client";
import React, { useState, ButtonHTMLAttributes } from "react";
import Button from "../Button/Button";
import { AiOutlineInfoCircle } from "react-icons/ai";
import data from "./sampleChartData";
import { AreaChart, Area, XAxis, ResponsiveContainer } from "recharts";
import ButtonIcon2 from "../ButtonWithIcon/ButtonIcon2";
import { FaAngleDown } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";

interface LandingProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const buttons = [
  { id: 1, icon: <FaAngleDown />, label: "Filter" },
  {
    id: 2,
    icon: <AiOutlineDownload />,
    label: "Export list",
  },
];

const Landing: React.FC<LandingProps> = ({
  children,
  variant = "primary",
  ...rest
}) => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (buttonId: number) => {
    console.log(`Button ${buttonId} clicked!`);
    setActiveButton(buttonId);

    setActiveButton(buttonId);
  };
  return (
    <div className="w-full px-10">
      <div className="flex items-center py-10 gap-5">
        <div style={{ flexBasis: "3%" }}>
          <div className="flex flex-col justify-between items-center gap-5 shadow-md rounded-full py-2">
            <img src="/Product Icons.svg" alt="" className="m-0 p-0" />
            <img src="/Product Icons (1).svg" alt="" className="m-0 p-0" />
            <img src="/Product Icons (2).svg" alt="" className="m-0 p-0" />
            <img src="/Product Icons (3).svg" alt="" className="m-0 p-0" />
          </div>
        </div>
        <div className=" p-2 group rounded-lg" style={{ flexBasis: "70%" }}>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="flex flex-col text-black">
                <span className="sm:text-sm">Available Balance</span>
                <h1 className="font-bold text-2xl">USD 10,000.00</h1>
              </div>
              <Button>Withdraw</Button>
            </div>
          </div>
          <div className="py-4" style={{ width: "100%", zIndex: "-100" }}>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                width={500}
                height={300}
                data={data}
                syncId="anyId"
                margin={{
                  top: 100,
                  right: 50,
                  left: 50,
                  bottom: 0,
                }}
              >
                <XAxis dataKey="name" ticks={["Apr 1, 2022", "Apr 30, 2022"]} />
                <Area
                  type="monotone"
                  dataKey="price"
                  stroke="#FF9462"
                  fill="#ffffff"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div style={{ flexBasis: "15%" }}>
          <div className="flex items-center  justify-between p-2 group rounded-lg w-full ">
            <div className="flex flex-col text-black">
              <span className="sm:text-sm">Ledge Balance</span>
              <h1 className="font-bold text-xl">USD 5,000.00</h1>
            </div>
            <AiOutlineInfoCircle className="text-gray-500" />
          </div>
          <div className="flex items-center  justify-between p-2 group rounded-lg w-full ">
            <div className="flex flex-col text-black">
              <span className="sm:text-sm">Total Payout</span>
              <h1 className="font-bold text-xl">USD 5,000.00</h1>
            </div>
            <AiOutlineInfoCircle className="text-gray-500" />
          </div>
          <div className="flex items-center  justify-between p-2 group rounded-lg w-full ">
            <div className="flex flex-col text-black">
              <span className="sm:text-sm">Total Revenue</span>
              <h1 className="font-bold text-xl">USD 5,000.00</h1>
            </div>
            <AiOutlineInfoCircle className="text-gray-500" />
          </div>
          <div className="flex items-center  justify-between p-2 group rounded-lg w-full ">
            <div className="flex flex-col text-black">
              <span className="sm:text-sm">Pending Payout</span>
              <h1 className="font-bold text-xl">USD 5,000.00</h1>
            </div>
            <AiOutlineInfoCircle className="text-gray-500" />
          </div>
        </div>

        {/*  */}
      </div>

      <div style={{ flexBasis: "70%" }}>
        <div className="flex justify-between items-center border-b-2 border-grey-300 py-3">
          <div className="flex flex-col text-black">
            <h1 className="font-bold text-xl">3 Transactions</h1>
            <span className="sm:text-sm">Your transactios for All time</span>
          </div>
          <div className="flex gap-10 text-black">
            {buttons.map((button) => (
              <ButtonIcon2
                key={button.id}
                onClick={() => handleButtonClick(button.id)}
                icon={button.icon}
                active={activeButton === button.id}
              >
                {button.label}
              </ButtonIcon2>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center py-3">
          <div className="flex gap-5">
            <div className="bg-green-200 flex text-center justify-center items-center transform rotate-45 p-4 rounded-full">
              <FaArrowDown
                className="bg-green-200"
                style={{ color: "green" }}
              />
            </div>
            <div className="flex flex-col text-black">
              <h1 className="font-normal text-md">
                Psychology of Money and 2 other products
              </h1>
              <span className="text-sm">Dominic Dan</span>
            </div>
          </div>
          <div className="flex flex-col items-end text-black">
            <h1 className="font-bold text-md">USD 600</h1>
            <span className="text-sm">Apr 03, 2022</span>
          </div>
        </div>
        <div className="flex justify-between items-center py-3">
          <div className="flex gap-5">
            <div className="bg-green-200 flex text-center justify-center items-center transform rotate-45 p-4 rounded-full">
              <FaArrowDown
                className="bg-green-200"
                style={{ color: "green" }}
              />
            </div>
            <div className="flex flex-col text-black">
              <h1 className="font-normal text-md">
                How to build an online brand
              </h1>
              <span className="text-sm">Delvan Ludacris</span>
            </div>
          </div>
          <div className="flex flex-col items-end text-black">
            <h1 className="font-bold text-md">USD 100</h1>
            <span className="text-sm">Apr 02, 2022</span>
          </div>
        </div>
        <div className="flex justify-between items-center py-3">
          <div className="flex gap-5">
            <div className="bg-green-200 flex text-center justify-center items-center transform rotate-45 p-4 rounded-full">
              <FaArrowDown
                className="bg-green-200"
                style={{ color: "green" }}
              />
            </div>
            <div className="flex flex-col text-black">
              <h1 className="font-normal text-md">
                Learn how to pitch your idea and 4 other products
              </h1>
              <span className="text-sm">Dujon Jerocho</span>
            </div>
          </div>
          <div className="flex flex-col items-end text-black">
            <h1 className="font-bold text-md">USD 100</h1>
            <span className="text-sm">Apr 02, 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
