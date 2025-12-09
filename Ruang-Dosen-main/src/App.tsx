import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { ClassesPage } from "./screens/Classes/ClassesPage";
import { SubstituteClassPage } from "./screens/Home/sections/SubstituteClass/SubstituteClassPage";
import { Profile } from "./screens/Home/sections/Profile/Profile";
import { SidebarCloseHoverSubsect } from "./screens/Home/sections/SidebarCloseHoverSubsect";
import { ViewAllClasses } from "./screens/Home/sections/ViewAllClasses/ViewAllClasses";
import { Jarkom } from "./screens/Home/sections/Jarkom/Jarkom";
import { Matdis } from "./screens/Home/sections/Matdis/Matdis";
import { Arsikom } from "./screens/Home/sections/Matdis/Arsikom";
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <SidebarCloseHoverSubsect />
        <div className="flex-1">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/view-all-classes" element={<ViewAllClasses />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/substitute-class" element={<SubstituteClassPage />} />
            <Route
              path="/profile-documents"
              element={<Profile />}
            />
            <Route path="/jarkom" element={<Jarkom  />}/>
            <Route path="/arsikom" element={<Arsikom  />}/>
            <Route path="/matdis" element={<Matdis  />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
