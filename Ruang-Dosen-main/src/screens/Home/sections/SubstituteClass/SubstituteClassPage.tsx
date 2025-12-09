import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const SubstituteClassPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('08/17/2025');
  const [showCalendar, setShowCalendar] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(7);
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedDay, setSelectedDay] = useState(17);
  const [course, setCourse] = useState('Jaringan Komputer');
  const [message, setMessage] = useState('');

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number): number => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevYear);
    
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        isPrevMonth: true
      });
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        isPrevMonth: false
      });
    }
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        isPrevMonth: false
      });
    }
    return days;
  };

  const handleDateSelect = (day: number, isCurrentMonth: boolean): void => {
    if (isCurrentMonth) {
      setSelectedDay(day);
      const formattedDate = `${String(currentMonth + 1).padStart(2, '0')}/${String(day).padStart(2, '0')}/${currentYear}`;
      setSelectedDate(formattedDate);
      setShowCalendar(false);
    }
  };

  const navigateMonth = (direction: 'prev' | 'next'): void => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const handleSubmit = () => {
    console.log('Submitted:', { date: selectedDate, course, message });
    setIsModalOpen(true);
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 [font-family:'Lexend_Deca']">
      {/* Main Content Container */}
      <div className="flex flex-col w-full max-w-4xl">
        {/* Header */}
        <div className="w-full h-24 mt-16 mb-10 bg-[url(https://c.animaapp.com/mbpscubqJ4b9Pt/img/rectangle-6629.svg)] bg-no-repeat bg-[length:110%_200%]
 bg-center rounded-3xl overflow-hidden px-10 flex items-center">
          <h1 className="text-2xl font-semibold text-[#3e3f71]">Substitute Class</h1>
        </div>

        {/* Form and Calendar */}
        <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-9">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Date Picker Section */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <div className="relative mb-4">
                <input
                  type="text"
                  value={selectedDate}
                  placeholder="MM/DD/YYYY"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onClick={() => setShowCalendar(!showCalendar)}
                  readOnly
                />
                <Calendar 
                  className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 cursor-pointer"
                  onClick={() => setShowCalendar(!showCalendar)}
                />
              </div>
              {showCalendar && (
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => navigateMonth('prev')}
                      className="p-1 hover:bg-blue-100 rounded"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-blue-600">{months[currentMonth]}</span>
                      <span className="font-medium text-blue-600">{currentYear}</span>
                    </div>
                    <button
                      onClick={() => navigateMonth('next')}
                      className="p-1 hover:bg-blue-100 rounded"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {daysOfWeek.map((day) => (
                      <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((dayObj, index) => (
                      <button
                        key={index}
                        onClick={() => handleDateSelect(dayObj.day, dayObj.isCurrentMonth)}
                        className={`
                          h-8 w-8 text-sm rounded-full flex items-center justify-center transition-colors
                          ${dayObj.isCurrentMonth 
                            ? (dayObj.day === selectedDay && currentMonth === 7 && currentYear === 2025)
                              ? 'bg-blue-600 text-white font-medium'
                              : 'text-gray-900 hover:bg-blue-100'
                            : 'text-gray-400'
                          }
                        `}
                        disabled={!dayObj.isCurrentMonth}
                      >
                        {dayObj.day}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-blue-200">
                    <button
                      onClick={() => setShowCalendar(false)}
                      className="px-3 py-1 text-sm text-gray-600 hover:bg-blue-100 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setShowCalendar(false)}
                      className="px-3 py-1 text-sm text-blue-600 font-medium hover:bg-blue-100 rounded"
                    >
                      OK
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Form Section */}
            <div className="flex-1">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="Jaringan Komputer">Jaringan Komputer</option>
                  <option value="Matematika Diskrit">Matematika Diskrit</option>
                  <option value="Komputer Arsitektur">Komputer Arsitektur</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Value"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              maxWidth: '400px',
            }}
          >
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '10px',
              }}
            >
              Request sent!
            </h2>
            <p
              style={{
                fontSize: '16px',
                marginBottom: '20px',
              }}
            >
              Please check your email regularly
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#2563eb',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export {SubstituteClassPage};