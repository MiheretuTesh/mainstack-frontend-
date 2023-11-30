"use client";
import React, { useState, useRef, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdGridView } from "react-icons/md";
import { HiOutlineBell, HiOutlineMailOpen } from "react-icons/hi";
import PopOver from "../PopOver";

import ButtonWithIcon from "../ButtonWithIcon/ButtonIcon";

const Header: React.FC = () => {
  const buttons = [
    { id: 1, icon: <AiOutlineHome />, label: "Home", variant: "primary" },
    {
      id: 2,
      icon: <MdOutlineAnalytics />,
      label: "Analytics",
      variant: "secondary",
    },
    { id: 3, icon: <FaMoneyBill />, label: "Revenue", variant: "primary" },
    { id: 4, icon: <FiUsers />, label: "CRM", variant: "primary" },
    { id: 5, icon: <MdGridView />, label: "Apps", variant: "primary" },
  ];

  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const appsButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleButtonClick = (
    buttonId: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log(`Button ${buttonId} clicked!`);
    setActiveButton(buttonId);

    if (buttonId === 5) {
      setIsPopoverOpen((prevIsPopoverOpen) => !prevIsPopoverOpen);

      if (appsButtonRef.current) {
        const rect = appsButtonRef.current.getBoundingClientRect();
        setPopoverPosition({
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
    } else {
      setActiveButton(buttonId);
      setIsPopoverOpen(false);
    }
  };

  const handleClosePopover = () => {
    setIsPopoverOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        appsButtonRef.current &&
        event.target instanceof Node &&
        !appsButtonRef.current.contains(event.target)
      ) {
        setIsPopoverOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header className="flex w-full items-center justify-between bg-white rounded-full shadow-md py-2 px-4 relative">
      <div className="flex items-center">
        <img src="/mainstack-logo.svg" alt="Logo" />
      </div>

      <div className="flex space-x-4">
        {buttons.map((button) => (
          <ButtonWithIcon
            key={button.id}
            onClick={(e) => handleButtonClick(button.id, e)}
            variant={button.variant}
            icon={button.icon}
            active={activeButton === button.id}
            ref={button.id === 5 ? appsButtonRef : undefined}
          >
            {button.label}
          </ButtonWithIcon>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <HiOutlineBell className="text-xl cursor-pointer text-black" />
        <HiOutlineMailOpen className="text-xl cursor-pointer text-black" />

        {isPopoverOpen && (
          <PopOver
            onClose={handleClosePopover}
            top={popoverPosition.top}
            left={popoverPosition.left}
          />
        )}

        <div className="flex items-center space-x-2 bg-gray-300 p-2 rounded-full">
          <div className="flex items-center justify-center space-x-2 bg-gray-700 p-1 rounded-full">
            OJ
          </div>
          <img src="/menu.svg" alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
