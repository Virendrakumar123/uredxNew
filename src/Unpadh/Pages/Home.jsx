import React, { useState } from "react";
import Navbar from "./Navbar";
import Step2 from "./Step2";
import Share from "./Share";
import Step3 from "./Step3";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const handleNavigation = (increment) => {
    if (increment) {
      if (step <= 2) {
        setStep(step + 1);
      }
      else if(step === 3){
        navigate("/business");
      }
    } else {
      if (step > 1) {
        setStep(step - 1);
      }
    }
  };

  return (
    <div>
      <Navbar step={step} setStep={setStep} />
      {step === 1 ? <Share /> : step == 2 ? <Step2 /> : <Step3 />}
      <Footer step={step} handleNavigation={handleNavigation} />
    </div>
  );
}

export default Home;
