"use client";
import React, { ButtonHTMLAttributes } from "react";
import Button from "../Button/Button";
import LineChart from "../LineChart";

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
      </div>
      <div className="w-20  p-2 group rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="flex flex-col text-black">
              <span className="sm:text-sm">Available Balance</span>
              <h1 className="font-bold text-2xl">USD 120,500.00</h1>
            </div>
            <Button>Withdraw</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
