"use client";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import AppItem from "./AppItem";

interface AppsPopoverProps {
  onClose: () => void;
  top: number;
  left: number;
}

const AppsPopover: React.FC<AppsPopoverProps> = ({ top, left }) => {
  const appItems = [
    {
      imgSrc: "/Product Icons.svg",
      title: "Link In Bio",
      description: "Manage your Link in Bio",
    },
    {
      imgSrc: "/Product Icons (1).svg",
      title: "Store",
      description: "Manage your Store activities",
    },
    {
      imgSrc: "/Product Icons (2).svg",
      title: "Media Kit",
      description: "Manage your Media Kit",
    },
    {
      imgSrc: "/Product Icons (3).svg",
      title: "Invoicing",
      description: "Manage your Invoinces",
    },
    {
      imgSrc: "/Product Icons (2).svg",
      title: "Bookings",
      description: "Manage your Bookings",
    },
  ];
  return (
    <div
      className={`absolute right-10 mt-2 w-80 bg-white border rounded shadow-lg p-3 text-black`}
      style={{ top: `${top - 30}px`, left: `${left - 50}px` }}
    >
      {appItems.map((item, index) => (
        <AppItem key={index} {...item} />
      ))}
    </div>
  );
};

export default AppsPopover;
