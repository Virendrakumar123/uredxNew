// import Share from "./Unpadh/Pages/Share";


import { Routes, Route } from "react-router-dom";
import Step2 from "./Unpadh/Pages/Step2.jsx";
import Step3 from "./Unpadh/Pages/Step3.jsx";

import BusinessHome from "./Unpadh/Business/BusinessHome.jsx";
import Home from "./Unpadh/Pages/Home.jsx";
import AdmiHome from "./Unpadh/AdminDaskboard/AdmiHome.jsx";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="business" element={<BusinessHome />} />
         <Route path="/Admin" element={<AdmiHome/>}/>
         
      </Routes>
    </div>
  );
}

export default App;
