// StepAuthorization.js
import { useState } from "react";
import { FormSteps } from "../../interfaces";

interface StepAuthorizationProps {
  onNext: (data: FormSteps) => void;
  onPrevious: () => void;
  formData: FormSteps;
}

const StepAuthorization: React.FC<StepAuthorizationProps> = ({
  onNext,
  onPrevious,
  formData,
}) => {
  const [otp, setOtp] = useState("");

  const handleAuthorization = () => {
    // Lógica de autorización
    onNext({ ...formData, authorization: { authorizationCode: "jajaj" } }); // Finaliza el flujo
  };

  return (
    <div>
      <h3>Autorización del Pago</h3>
      <input
        type="text"
        placeholder="Código de Autorización (OTP)"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={onPrevious}>Volver</button>
      <button onClick={handleAuthorization}>Autorizar</button>
    </div>
  );
};

export default StepAuthorization;
