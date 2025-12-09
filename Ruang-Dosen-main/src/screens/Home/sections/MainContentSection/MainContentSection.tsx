import { ChevronRightIcon, TimerIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ADDED: Import useNavigate for navigation
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Notifications } from "../../../../components/ui/Notifications";


export const MainContentSection = (): JSX.Element => {

  const handleCardClick = (courseId: number) => {
    switch (courseId) {
      case 1:
        navigate("/jarkom"); // atau route apapun untuk Jaringan Komputer
        break;
      case 2:
        navigate("/matdis"); // route untuk Matematika Diskrit
        break;
      case 3:
        navigate("/arsikom"); // route untuk Komputer Arsitektur
        break;
      default:
        console.log("Course not found");
    }
  };

  const navigate = useNavigate(); // ADDED: Initialize useNavigate hook

  const [showNotifications, setShowNotifications] = useState(false);
  // Handler untuk toggle notifications
  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  // Handler untuk menutup notifications
  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };

  const [currentMonth, setCurrentMonth] = useState<number>(4); // 0 = Jan, 4 = May
  const [currentYear, setCurrentYear] = useState<number>(2025);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  

  const courses = [
    {
      id: 1,
      title: "Jaringan Komputer",
      lessonsLeft: 10,
      sks: 3,
      backgroundImage:
        "https://c.animaapp.com/mbpscubqJ4b9Pt/img/frame-2087327358.png",
    },
    {
      id: 2,
      title: "Matematika Diskrit",
      lessonsLeft: 10,
      sks: 3,
      backgroundImage:
        "https://c.animaapp.com/mbpscubqJ4b9Pt/img/frame-2087327359.png",
    },
  ];

  const scheduleItems = [
    { id: 1, title: "Jaringan Komputer", sks: 3 },
    { id: 2, title: "Matematika Diskrit", sks: 3 },
    { id: 3, title: "Arsitektur Komputer", sks: 2 },
  ];

  const [selectedDate, setSelectedDate] = useState<number | null>(11);

  const handleDateClick = (date: number) => {
    setSelectedDate(date);
  };

  // Generate calendar dates
  const generateCalendarDates = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const calendar: (number | null)[] = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      calendar.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push(i);
    }

    return calendar;
  };

  const calendarDates = generateCalendarDates();

  // ADDED: Handler for View All button
  const handleViewAllClick = () => {
    navigate("/view-all-classes");
  };
  return (
    <section className="flex w-full pl-8 relative">
      {/* Main Content Area */}
      <div className="flex-1 pr-8">
        {/* Banner */}
        <div className="w-full h-[166px] mt-[137px] bg-[url(https://c.animaapp.com/mbpscubqJ4b9Pt/img/rectangle-6629.svg)] bg-no-repeat bg-cover bg-center flex items-center justify-center rounded-3xl overflow-hidden">
          <h1 className="[font-family:'Lexend_Deca',Helvetica] font-semibold text-[#3e3f71] text-4xl tracking-[-1.60px] leading-[46px]">
            Welcome Back, Carrie!
          </h1>
        </div>

        {/* Date Display */}
        <div className="flex justify-end mt-4 mb-8">
          <p className="[font-family:'Lexend_Deca',Helvetica] font-medium text-black text-xl">
            Friday, 2 May 2025
          </p>
        </div>

        {/* Classes Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="[font-family:'Lexend_Deca',Helvetica] font-medium text-black text-xl">
              Classes
            </h2>
            <Button
              variant="outline"
              className="bg-[#c8e5ff] rounded-[17px] h-9 px-3 border-none [font-family:'Lexend_Deca',Helvetica] font-medium text-black text-xl"
              onClick={handleViewAllClick} // ADDED: onClick handler for navigation
            >
            View All &gt;
            </Button>
          </div>

          {/* Course Cards */}
          <div className="space-y-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="w-full h-[281px] rounded-[14px] shadow-[-5px_8px_20px_#00000040] border-none overflow-hidden"
                onClick={() => handleCardClick(course.id)}
              >
                <CardContent className="p-0 h-full">
                  <div
                    className="flex items-end justify-between w-full h-full px-[29px] py-[23px] rounded-[14px]"
                    style={{
                      background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 84%), url(${course.backgroundImage}) center center / cover no-repeat`,
                    }}
                  >
                    <div className="relative">
                      <h3 className="[font-family:'Lexend_Deca',Helvetica] font-medium text-white text-[26px]">
                        {course.title}
                      </h3>
                      <p className="[font-family:'Lexend_Deca',Helvetica] font-light text-white text-xl mt-2">
                        {course.lessonsLeft} Lesson left
                      </p>
                    </div>
                    <div className="flex items-center">
                      <TimerIcon className="w-[27px] h-[27px] text-white" />
                      <span className="ml-2 [font-family:'Lexend_Deca',Helvetica] font-normal text-white text-base">
                        {course.sks} SKS
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[433px] bg-[url(https://c.animaapp.com/mbpscubqJ4b9Pt/img/rectangle-6624.svg)] bg-[100%_100%] p-10 relative">
        {/* Header with Logo and Notification */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={handleNotificationClick}
            className="w-[51px] h-[51px] bg-white rounded-[25.5px] flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <img
              className="w-[23px] h-[23px]"
              alt="Updates"
              src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/updayes.svg"
            />
          </button>
          <img
            className="w-[129px] h-[65px] object-cover"
            alt="Logo kkg"
            src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/logo-kkg.png"
          />
        </div>

        {/* Notifications Popup */}
        {showNotifications && (
          <div className="absolute top-20 left-4 z-50">
            <Notifications onClose={handleCloseNotifications} />
          </div>
        )}

        {/* Calendar Section */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="[font-family:'Lexend_Deca',Helvetica] font-medium text-black text-xl">
              {monthNames[currentMonth]} {currentYear}
            </h2>
            <div className="flex space-x-2">
              <Button
                onClick={handlePreviousMonth}
                variant="outline"
                size="icon"
                className="w-9 h-9 rounded-full border border-[#0000001a]"
              >
                <img
                  className="w-3.5 h-2.5"
                  alt="Arrow left"
                  src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/arrow-left.png"
                />
              </Button>
              <Button
                onClick={handleNextMonth}
                variant="outline"
                size="icon"
                className="w-9 h-9 rounded-full border border-[#0000001a]"
              >
                <img
                  className="w-3.5 h-2.5"
                  alt="Arrow right"
                  src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/arrow-left-1.png"
                />
              </Button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center mb-4">
                <span className="[font-family:'DM_Sans',Helvetica] font-bold text-[#3549f8] text-[12.9px] tracking-[-0.32px]">
                  {day}
                </span>
              </div>
            ))}

            {calendarDates.map((date, index) => (
              <div
                key={index}
                className={`w-10 h-10 flex items-center justify-center cursor-pointer transition-colors duration-200 ${
                  date === selectedDate
                    ? "bg-[#3549f8] rounded-full text-white"
                    : "text-black hover:bg-gray-100 rounded-full"
                }`}
                onClick={() => date && handleDateClick(date)}
              >
                {date}
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Section */}
        <div className="mb-10">
          <h2 className="[font-family:'Lexend_Deca',Helvetica] font-medium text-black text-xl mb-6">
            Schedule
          </h2>
          <div className="space-y-4">
            {scheduleItems.map((item) => (
              <Card
                key={item.id}
                className="bg-[#f9f9f9] rounded-[14px] border-none"
              >
                <CardContent className="p-3 flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#3549f8] rounded-[3px] mr-8"></div>
                  <div className="flex-1">
                    <h3 className="[font-family:'Lexend_Deca',Helvetica] font-medium text-black text-base">
                      {item.title}
                    </h3>
                    <p className="[font-family:'Lexend_Deca',Helvetica] font-normal text-black text-xs opacity-40">
                      {item.sks} SKS
                    </p>
                  </div>
                  <ChevronRightIcon className="w-3.5 h-3.5 text-gray-500" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Events Section */}
        <div>
          <h2 className="[font-family:'Lexend_Deca',Helvetica] font-medium text-black text-xl mb-6">
            Events
          </h2>
          <Card className="bg-[#f9f9f9] rounded-3xl border-none">
            <CardContent className="p-5">
              <div className="flex justify-between items-start">
                <h3 className="[font-family:'Lexend_Deca',Helvetica] font-semibold text-black text-base">
                  Rapat Senat Akademik
                </h3>
                <img
                  className="w-[37px] h-[27px]"
                  alt="Google meet"
                  src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/google-meet.png"
                />
              </div>
              <div className="flex items-center gap-2.5 mt-5">
                <span className="[font-family:'Lexend_Deca',Helvetica] font-normal text-black text-xs leading-3">
                  Nov 22nd, 2025
                </span>
                <img
                  className="w-px h-[8.5px]"
                  alt="Line"
                  src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/line-32.svg"
                />
                <span className="[font-family:'Lexend_Deca',Helvetica] font-normal text-black text-xs leading-3">
                  2:30 - 4:30 pm
                </span>
                <img
                  className="w-px h-[8.5px]"
                  alt="Line"
                  src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/line-32.svg"
                />
                <a
                  href="https://meet.google.com/landing?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[font-family:'Lexend_Deca',Helvetica] font-normal text-black text-xs leading-3 hover:underline"
                >
                  Google Meet
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MainContentSection;