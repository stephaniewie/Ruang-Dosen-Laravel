import React from "react";
import { Video } from "lucide-react";

interface NotificationsProps {
  onClose: () => void;
}

export const Notifications: React.FC<NotificationsProps> = ({ onClose }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 w-[300px] shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center">
          <h3 className="font-semibold text-[16px] mr-2">Upcoming Meeting</h3>
          <Video className="w-[16px] h-[16px] text-gray-600" />
        </div>
        <button onClick={onClose} className="text-gray-600 text-[16px]">
          ✕
        </button>
      </div>
      
      {/* Body */}
      <p className="text-[14px] mb-4">5 Hours until "Rapat Senat Akademik"</p>
      
      {/* Button */}
      <button className="bg-gray-800 text-white py-1 px-3 rounded text-[14px]">
        Set Reminder
      </button>
    </div>
  );
};