import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Download, Settings, Mail } from "lucide-react";

const Profile = (): JSX.Element => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const handleDownload = (type: string) => {
    console.log(`Downloading ${type}...`);
    // Implement download functionality here
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  const navigate = useNavigate();

  return (
    <div className="font-['Lexend_Deca']">
      {/* Bagian Header */}
      <div className="flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="flex flex-col w-full max-w-4xl">
          <div className="w-full h-24 mt-16 mb-10 bg-[url(https://c.animaapp.com/mbpscubqJ4b9Pt/img/rectangle-6629.svg)] bg-no-repeat bg-[length:110%_200%] bg-center rounded-3xl overflow-hidden px-10 flex items-center">
            <h1 className="text-2xl font-semibold text-[#3e3f71]">
              Profile & Documents
            </h1>
          </div>

          {/* Container with Dashed Border */}
          <div className="border-2 border-dashed border-gray-300 rounded-2xl">
            <div className="max-w-4xl mx-auto p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left Side - Documents */}
                <div className="flex-1 pl-5">
                  {/* Full Syllabus */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">
                        Full Syllabus
                      </h3>
                      <p className="text-sm text-gray-600 underline cursor-pointer">
                        Click Here to view
                      </p>
                    </div>
                    <button
                      onClick={() => handleDownload("syllabus")}
                      className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      download
                    </button>
                  </div>

                  {/* Academic Credential */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">
                        Academic Credential
                      </h3>
                      <p className="text-sm text-gray-600 underline cursor-pointer">
                        Click Here to view
                      </p>
                    </div>
                    <button
                      onClick={() => handleDownload("credential")}
                      className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      download
                    </button>
                  </div>

                  {/* Certifications */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">
                        Certifications
                      </h3>
                      <p className="text-sm text-gray-600 underline cursor-pointer">
                        Click Here to view
                      </p>
                    </div>
                    <button
                      onClick={() => handleDownload("certifications")}
                      className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      download
                    </button>
                  </div>

                  {/* Participation Certificates */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">
                        Participation Certificates
                      </h3>
                      <p className="text-sm text-gray-600 underline cursor-pointer">
                        Click Here to view
                      </p>
                    </div>
                    <button
                      onClick={() => handleDownload("participation")}
                      className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      download
                    </button>
                  </div>

                  {/* Language Preference Section */}
                  <div className="mt-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Settings className="h-5 w-5 text-gray-600" />
                      <h3 className="text-sm font-medium text-gray-600">
                        Language Preference
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="language"
                          value="english"
                          checked={selectedLanguage === "english"}
                          onChange={() => handleLanguageChange("english")}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <div>
                          <span className="text-gray-900 font-medium">
                            English
                          </span>
                          <div className="text-sm text-gray-500">Default</div>
                        </div>
                      </label>

                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="language"
                          value="indonesian"
                          checked={selectedLanguage === "indonesian"}
                          onChange={() => handleLanguageChange("indonesian")}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-gray-900">Indonesian</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Right Side - Profile */}
                <div className="flex-1 pl-32">
                  <div className="flex items-start gap-4">
                    {/* Profile Picture */}
                    <div className="flex-shrink-0">
                      <img
                        src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/avatar.png"
                        alt="Carrie Bradshaw"
                        className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                      />
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 mb-1">
                        Carrie Bradshaw
                      </h2>
                      <p className="text-lg text-gray-700 mb-2">M.Sc., Ph.D.</p>
                      <p className="text-sm text-gray-600 mb-3">
                        NID 50240317823
                      </p>

                      {/* Gmail Icon */}
                      <a
                        href="https://mail.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-6 block"
                      >
                        <Mail className="h-6 w-6 text-red-500 cursor-pointer hover:text-red-600" />
                      </a>

                      {/* Faculty Info */}
                      <div className="space-y-2 mb-6">
                        <div>
                          <span className="text-sm font-medium text-gray-700 w-32">
                            Current Faculty:
                            <br></br>Faculty of Computer Science
                          </span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700 w-32">
                            <span className="text-blue-600">7</span> Years of
                            Teaching
                          </span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700 w-32">
                            Field of Specialization:
                            <br />
                            Software Engineering
                          </span>
                        </div>
                      </div>

                      {/* Links */}
                      <div className="space-y-2">
                        <a
                          href="https://scholar.google.com/"
                          target="_blank"
                          className="block text-sm text-blue-600 hover:text-blue-800 underline"
                        >
                          Google Scholar
                        </a>
                        <a
                          href="https://research.google/pubs/"
                          target="_blank"
                          className="block text-sm text-blue-600 hover:text-blue-800 underline"
                        >
                          Publications
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-blue-600 hover:text-blue-800 underline"
                        >
                          Supervised Student Projects
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Profile };
