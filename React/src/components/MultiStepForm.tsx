import { useState } from "react";
import CitizenshipForm from "../elements/CitizenshipForm";
import EconomicInfoForm from "../elements/EconomicInfoForm.";
import PersonalInfoForm from "../elements/PersonalInfoForm";
import ResidentalInfoForm from "../elements/ResidentalInfoForm";
import DemographicInfoForm from "../elements/DemographicInfoForm";
import HealthInfoForm from "../elements/HealthInfoForm";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<any>({});

  const nextStep = (data: any) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = (data: any) => {
    console.log("Final Data", { ...formData, data });
  };

  switch (step) {
    case 1:
      return <CitizenshipForm nextStep={nextStep} />;
    case 2:
      return <DemographicInfoForm nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <EconomicInfoForm nextStep={nextStep} prevStep={prevStep} />;
    case 4:
      return <HealthInfoForm nextStep={nextStep} prevStep={prevStep} />;
    case 5:
      return <PersonalInfoForm nextStep={nextStep} prevStep={prevStep} />;
    case 6:
      return <ResidentalInfoForm nextStep={nextStep} prevStep={prevStep} />;
    default:
      return <h1>Thank you for the submission!</h1>;
  }
};

export default MultiStepForm;
