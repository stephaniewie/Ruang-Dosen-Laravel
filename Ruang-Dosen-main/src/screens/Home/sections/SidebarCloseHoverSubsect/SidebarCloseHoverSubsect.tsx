// src/screens/Home/sections/SidebarCloseHoverSubsect/SidebarCloseHoverSubsect.tsx
import { ChevronLeftIcon, ChevronRightIcon, HomeIcon, BookOpenText } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

// Navigation menu items data
const navigationItems = [
  {
    icon: <HomeIcon className="w-[29.5px] h-[29.5px] text-[#3e3f71]" />,
    link: "/",
    label: "Dashboard",
    isActive: false,
  },
  {
    icon:<BookOpenText className="w-[29.5px] h-[29.5px] text-[#3e3f71]" />,
    link: "/view-all-classes",
    label: "Classes",
    isActive: false,
  },
  {
    icon: (
      <img
        className="w-[30px] h-[30px]"
        alt="Date"
        src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/date.png"
      />
    ),
    link: "/substitute-class",
    label: "Substitute Class",
    isActive: false,
  },
  {
    icon: (
      <img
        className="w-[30px] h-[30px]"
        alt="User"
        src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/user.png"
      />
    ),
    link: "/profile-documents",
    label: "Profile",
    isActive: false,
  },
];

export const SidebarCloseHoverSubsect = (): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAvatarClick = () => {
    console.log("Avatar clicked!"); // untuk debug
    navigate("/profile-documents");
  };

  return (
    <aside
      className={` font-lexend relative bg-white rounded-[17.7px] border-r-[1.48px] border-[#0000001a] transition-all duration-300 ease-in-out ${
        isExpanded ? "w-[280px]" : "w-[132px]"
      } h-full`}
      onMouseEnter={() => !isExpanded && setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Toggle button */}
      <Button
        variant="outline"
        size="icon"
        className={`absolute top-[50px] p-[8.85px] rounded-[11.8px] border-[1.48px] border-[#f6f6f6] transition-all duration-300 ${
          isExpanded ? "left-[248px]" : "left-28"
        }`}
        onClick={toggleSidebar}
      >
        {isExpanded ? (
          <ChevronLeftIcon className="w-[23.6px] h-[23.6px]" />
        ) : (
          <ChevronRightIcon className="w-[23.6px] h-[23.6px]" />
        )}
      </Button>

      {/* Sidebar content */}
      <div className="flex flex-col items-start pt-[91px] px-[35px] h-full">
        {/* User profile section */}
        <div className="flex items-center gap-4 mb-8">
          <Avatar
            className="w-[65px] h-[65px] flex-shrink-0 cursor-pointer"
            onClick={handleAvatarClick}
          >
            <AvatarImage
              src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/avatar.png"
              alt="User avatar"
            />
          </Avatar>
          {isExpanded && (
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-[#1b1d21] text-lg whitespace-nowrap overflow-hidden">
                Carrie Bradshaw
              </h3>
            </div>
          )}
        </div>

        {/* Separator */}
        <Separator
          className={`h-[3px] my-[35px] bg-[#dedede] rounded-[2.95px] transition-all duration-300 ${
            isExpanded ? "w-full" : "w-[61px]"
          }`}
        />

        {/* Navigation */}
        <div className="flex flex-col gap-[11.8px] w-full">
          <div
            className="font-medium text-[#757575] text-[14.8px] tracking-[0.59px] leading-[17.7px] whitespace-nowrap"
            style={{ marginLeft: "10px" }}
          >
            MAIN
          </div>

          {/* Navigation items */}
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                className={`flex items-center gap-4 px-[17.7px] py-[14.75px] rounded-[11.8px] transition-all duration-200 ${
                  item.isActive ? "bg-[#f6f6f6]" : "hover:bg-[#f6f6f6]"
                } ${isExpanded ? "w-full" : "w-[61px] justify-center"}`}
                to={item.link}
              >
                <div className="relative w-[29.5px] h-[29.5px] flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                {isExpanded && (
                  <span className="font-medium text-[#1b1d21] text-lm whitespace-nowrap overflow-hidden">
                    {item.label}
                  </span>
                )}
              </Link>

              {/* Tooltip for collapsed state */}
              {!isExpanded && hoveredItem === index && (
                <div className="absolute left-[110px] top-1/2 transform -translate-y-1/2 bg-black rounded-[5.9px] px-[17.7px] py-[14.75px] shadow-[0px_7.38px_14.75px_-5.73px_#00000040] z-50">
                  <div className="font-normal text-white text-[16px] leading-[20px] whitespace-nowrap">
                    {item.label}
                  </div>
                  {/* Tooltip arrow */}
                  <div className="absolute w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px] border-t-transparent border-b-transparent border-r-black top-1/2 transform -translate-y-1/2 -left-[10px]"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
