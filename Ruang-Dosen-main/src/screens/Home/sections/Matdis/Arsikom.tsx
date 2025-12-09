import React from 'react';
import { ChevronLeft, Upload, Users, Video, Calendar, Clock } from 'lucide-react';
import { TimerIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";


const Arsikom = () => {
  const navigate = useNavigate();
    
    // Navigate ke home
   const handleBackToHome = () => {
      navigate("/");
    };


  const topStudents = [
    { name: 'Cita Citata', progress: '14/18 job done', percentage: 70, color: 'bg-teal-400' },
    { name: 'Inul Daratista', progress: '12/18 job done', percentage: 67, color: 'bg-purple-400' },
    { name: 'Joe Jonas', progress: '7/18 job done', percentage: 39, color: 'bg-indigo-500' },
    { name: 'Rachel Se', progress: '11/18 job done', percentage: 61, color: 'bg-pink-300' },
    { name: 'Anggun', progress: '9/18 job done', percentage: 50, color: 'bg-green-500' },
    { name: 'Pedro Pascal', progress: '8/18 job done', percentage: 50, color: 'bg-pink-800' }
  ];

  const students = [
    { name: 'Ahmad Rizki', avatar: 'https://i.pinimg.com/736x/41/6a/e2/416ae2ef2b383cc63525e1645f96caf5.jpg' },
    { name: 'Sari Dewi', avatar: 'https://i.pinimg.com/736x/ce/57/63/ce5763e6a962600b8de0d1821c1ecc08.jpg'},
    { name: 'Budi Santoso', avatar: 'https://i.pinimg.com/736x/b4/05/c5/b405c52aa9c21aaf25ef57673b1566c5.jpg' },
    { name: 'Maya Sari', avatar: 'https://i.pinimg.com/736x/8b/f2/35/8bf235b1a0a4bbd28005dcf7be4dd5a6.jpg' },
  ];



  
  return (

    <div className="min-h-screen bg-gray-50 p-6 font-['Lexend_Deca']">
      {/* Header */}
    <div className="mb-6">
      <Button
        variant="outline"
        className="bg-[#c8e5ff] rounded-[17px] h-9 px-3 border-none [font-family:'Lexend_Deca',Helvetica] font-medium text-black text-xl"
        onClick={handleBackToHome}
      >
        Back to Home
      </Button>
    </div>

    <div className="mt-8 mb-8">
    <Card
    className="w-full h-32 rounded-[14px] shadow-[-5px_8px_20px_#00000040] border-none overflow-hidden px-10 flex items-center justify-center"
    style={{
      background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 84%), url('https://c.animaapp.com/FyJrcnSj/img/rectangle-6629.png') center center no-repeat`,
      backgroundSize: '1500px', // Ensures the image covers the area, scaling up if needed
      backgroundPosition: 'center', // Centers the image
      backgroundRepeat: 'no-repeat', // Prevents tiling
    }}
  >
        <h1 className="text-3xl font-medium text-white">Komputer Arsitektur</h1>
    </Card>
    </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Class Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Class Card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Kelas S</h2>
                <p className="text-gray-600">Lab A</p>
                <p className="text-gray-600">Kamis, 07:00 - 10:00</p>
              </div>
              <div className="text-right text-sm text-gray-500">
                <span>•••</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-gray-600">
                <Users size={16} className="mr-2" />
                <span className="text-sm">45 People</span>
              </div>
              <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600">
                <Upload size={16} className="mr-2" />
                Upload Files
              </button>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>Scheduled</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>180 Minutes</span>
              </div>
            </div>

            {/* Student Avatars */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex -space-x-2">
                {students.slice(0, 4).map((student, index) => (
                  <div key={index} className="relative">
                    <img 
                      src={student.avatar} 
                      alt={student.name}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ` }></div>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-3">
                <a href="https://meet.google.com/landing" target="_blank" className="text-sm text-gray-600 underline" >Start a meeting</a>
                <img src="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png"  alt="Google Meet" className="w-5 h-5"/>
              </div>
            </div>
          </div>
          {/* Top Students */}
          <div className="bg-white rounded-xl shadow-sm p-6  w-[425px]">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Students</h3>
            <div className="space-y-4">
              {topStudents.map((student, index) => (
                <div key={index} className="flex items-center justify-start gap-7">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full ${student.color} flex items-center justify-center text-white font-semibold`}>
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{student.name}</p>
                      <p className="text-sm text-gray-500">{student.progress}</p>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {student.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div> 
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
          

          {/* Status Report */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Status Report</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Pie Chart */}
              <div className="flex justify-center">
                <div className="relative">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle cx="64" cy="64" r="56" fill="none" stroke="#e5e7eb" strokeWidth="12"/>
                    <circle cx="64" cy="64" r="56" fill="none" stroke="#10b981" strokeWidth="12" strokeDasharray="175 175" strokeDashoffset="44"/>
                    <circle cx="64" cy="64" r="56" fill="none" stroke="#ef4444" strokeWidth="12" strokeDasharray="175 175" strokeDashoffset="87"/>
                    <circle cx="64" cy="64" r="56" fill="none" stroke="#f59e0b" strokeWidth="12" strokeDasharray="175 175" strokeDashoffset="131"/>
                    <circle cx="64" cy="64" r="56" fill="none" stroke="#3b82f6" strokeWidth="12" strokeDasharray="175 175" strokeDashoffset="156"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">45</div>
                      <div className="text-sm text-gray-500">Students</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend and Stats */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Done</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Overdue work</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Work finished late</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Processing</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">06</div>
                    <div className="text-xs text-gray-600 mt-1">
                      <div>Overdue work</div>
                      <div>More than 5 assignment overdue</div>
                    </div>
                    <div className="text-sm text-red-600 font-medium mt-2">38%</div>
                  </div>
                  
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">27</div>
                    <div className="text-xs text-gray-600 mt-1">
                      <div>Work finished late</div>
                      <div>More than 15 homeworks submitted late</div>
                    </div>
                    <div className="text-sm text-yellow-600 font-medium mt-2">62%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Upload size={16} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">Homework Week 3 submitted</p>
                  <p className="text-xs text-gray-500">by Pedro Pascal • 2 minutes ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Users size={16} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">New student joined</p>
                  <p className="text-xs text-gray-500">Chris Evans joined the class • 15 minutes ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                  <Calendar size={16} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">Scheduled meeting reminder</p>
                  <p className="text-xs text-gray-500"> "Rapat Senat"• 1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {Arsikom};