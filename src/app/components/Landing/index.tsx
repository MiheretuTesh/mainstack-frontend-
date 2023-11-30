"use client";
import React, { ButtonHTMLAttributes } from "react";
import Button from "../Button/Button";
import { AiOutlineInfoCircle } from "react-icons/ai";
import data from "./sampleChartData";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface LandingProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Landing: React.FC<LandingProps> = ({
  children,
  variant = "primary",
  ...rest
}) => {
  return (
    <div className="flex w-full items-center py-10 gap-5">
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
              <h1 className="font-bold text-2xl">USD 120,500.00</h1>
            </div>
            <Button>Withdraw</Button>
          </div>
        </div>
        <div className="py-4" style={{ width: "100%" }}>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              width={500}
              height={200}
              data={data}
              syncId="anyId"
              margin={{
                top: 10,
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
            <h1 className="font-bold text-xl">USD 0.00</h1>
          </div>
          <AiOutlineInfoCircle className="text-gray-500" />
        </div>
        <div className="flex items-center  justify-between p-2 group rounded-lg w-full ">
          <div className="flex flex-col text-black">
            <span className="sm:text-sm">Total Payout</span>
            <h1 className="font-bold text-xl">USD 55,080.00</h1>
          </div>
          <AiOutlineInfoCircle className="text-gray-500" />
        </div>
        <div className="flex items-center  justify-between p-2 group rounded-lg w-full ">
          <div className="flex flex-col text-black">
            <span className="sm:text-sm">Total Revenue</span>
            <h1 className="font-bold text-xl">USD 175,580.00</h1>
          </div>
          <AiOutlineInfoCircle className="text-gray-500" />
        </div>
        <div className="flex items-center  justify-between p-2 group rounded-lg w-full ">
          <div className="flex flex-col text-black">
            <span className="sm:text-sm">Pending Payout</span>
            <h1 className="font-bold text-xl">USD 0.00</h1>
          </div>
          <AiOutlineInfoCircle className="text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
