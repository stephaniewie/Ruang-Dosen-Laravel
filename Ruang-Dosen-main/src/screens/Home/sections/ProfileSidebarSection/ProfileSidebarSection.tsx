import { ChevronLeftIcon, HomeIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

// Navigation menu items data
const navigationItems = [
  {
    icon: <HomeIcon className="w-[29.5px] h-[29.5px]" />,
    link: "/home",
    isActive: false,
  },
  {
    icon: <img className="w-[30px] h-[30px]" alt="Frame" src="" />,
    link: "#",
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
    link: "#",
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
    link: "#",
    isActive: true,
  },
];

export const ProfileSidebarSection = (): JSX.Element => {
  return (
    <aside className="w-[132px] h-full bg-white rounded-[17.7px] border-r-[1.48px] border-[#0000001a] relative ">
      {/* Collapse button */}
      <Button
        variant="outline"
        size="icon"
        className="absolute top-[50px] left-28 p-[8.85px] rounded-[11.8px] border-[1.48px] border-[#f6f6f6]"
      >
        <ChevronLeftIcon className="w-[23.6px] h-[23.6px]" />
      </Button>

      {/* Profile tooltip */}
      <div className="absolute top-[470px] left-[118px] bg-black rounded-[5.9px] px-[17.7px] py-[14.75px] shadow-[0px_7.38px_14.75px_-5.73px_#00000040] inline-flex items-start gap-[11.8px]">
        <div className="relative w-fit mt-[-1.48px] font-normal text-white text-[20.7px] leading-[29.5px] whitespace-nowrap">
          Profile &amp; Documents
        </div>
        <img
          className="absolute w-[19px] h-[38px] top-2.5 -left-3"
          alt="Shape"
          src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/shape.svg"
        />
      </div>

      {/* Sidebar content */}
      <div className="flex flex-col items-center pt-[91px] px-[35px]">
        {/* Avatar */}
        <Avatar className="w-[65px] h-[65px]">
          <AvatarImage
            src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/avatar.png"
            alt="User avatar"
          />
        </Avatar>

        {/* Separator */}
        <Separator className="w-[61px] h-[3px] my-[35px] bg-[#dedede] rounded-[2.95px]" />

        {/* Navigation */}
        <div className="flex flex-col items-center gap-[11.8px] w-[61px]">
          <div className="font-medium text-[#757575] text-[14.8px] tracking-[0.59px] leading-[17.7px] whitespace-nowrap">
            MAIN
          </div>

          {/* Navigation items */}
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              className={`inline-flex items-center justify-center px-[17.7px] py-[14.75px] rounded-[11.8px] ${
                item.isActive ? "bg-[#f6f6f6]" : ""
              }`}
              to={item.link}
            >
              <div className="relative w-[29.5px] h-[29.5px] flex items-center justify-center">
                {item.icon}
              </div>
            </Link>
          ))}
        </div>

        {/* Pointing arrow */}
        <div className="absolute w-[35px] h-[35px] top-[507px] left-[71px]">
          <img
            className="absolute w-[25px] h-[26px] top-1.5 left-1.5"
            alt="Pointing"
            src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/pointing.png"
          />
        </div>
      </div>
    </aside>
  );
};
