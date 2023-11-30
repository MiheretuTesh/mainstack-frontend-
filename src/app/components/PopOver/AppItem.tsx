import React from "react";
import { FaAngleRight } from "react-icons/fa";

interface AppItemProps {
  imgSrc: string;
  title: string;
  description: string;
}

const AppItem: React.FC<AppItemProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="w-full p-2 group hover:border rounded-lg hover:border-blue-500">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={imgSrc} alt="Logo" />
          <div className="flex flex-col">
            <h1 className="font-bold">{title}</h1>
            <span className="sm:text-sm">{description}</span>
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100">
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default AppItem;
