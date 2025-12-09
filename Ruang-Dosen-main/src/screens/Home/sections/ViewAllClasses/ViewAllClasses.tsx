import React from "react"; 
import { Card, CardContent } from "../../../../components/ui/card"; 
import { useNavigate } from "react-router-dom"; 
import { TimerIcon } from "lucide-react"; 
import { Button } from "../../../../components/ui/button"; 
 
export const ViewAllClasses = (): JSX.Element => { 
  const navigate = useNavigate(); 
   
  // Navigate ke home 
  const handleBackToHome = () => { 
    navigate("/"); 
  }; 
 
  const handleBackToJarkom = () => { 
    navigate("/jarkom"); 
  }; 

  // Handle click untuk setiap card berdasarkan ID
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
    { 
      id: 3, 
      title: "Komputer Arsitektur", 
      lessonsLeft: 10, 
      sks: 3, 
      backgroundImage: 
        "https://c.animaapp.com/FyJrcnSj/img/rectangle-6629.png", 
    }, 
  ]; 
 
  return ( 
    <div className="p-8"> 
      <div className="flex justify-between items-center mb-8"> 
        <h1 className="[font-family:'Lexend_Deca',Helvetica] font-medium text-black text-2xl"> 
          All Classes 
        </h1> 
        <Button 
          variant="outline" 
          className="bg-[#c8e5ff] rounded-[17px] h-9 px-3 border-none [font-family:'Lexend_Deca',Helvetica] font-medium text-black text-xl" 
          onClick={handleBackToHome} 
        > 
          Back to Home 
        </Button> 
      </div> 
       
      <div className="space-y-8"> 
        {courses.map((course) => ( 
          <Card 
            key={course.id} 
            className="w-full h-[281px] rounded-[14px] shadow-[-5px_8px_20px_#00000040] border-none overflow-hidden cursor-pointer hover:shadow-[-5px_8px_25px_#00000050] transition-shadow duration-200" 
            onClick={() => handleCardClick(course.id)}
          > 
            <CardContent className="p-0 h-full"> 
              <div 
                className="flex items-end justify-between w-full h-full px-[29px] py-[23px] rounded-[14px]" 
                style={{ 
                  background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 84%), url(${course.backgroundImage}) center center / ${ 
                    course.id === 3 ? "150%" : "cover" 
                  } no-repeat`, 
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
  ); 
};