import { useState } from "react";
import StepManager from "../../../core/components/step-manager/StepManager";
import StepLogin from "./components/step-login";
import StepTransferData from "./components/step-transferdata";
import StepAuthorization from "./components/step-authorization";
import { BankAConfig, FormSteps } from "./interfaces";

interface BankAProps {
  config: BankAConfig;
  onPaymentSuccess: (paymentData: any) => void;
}
const BancoA: React.FC<BankAProps> = ({ config, onPaymentSuccess }) => {
  const paymentData: FormSteps = {
    login: {
      username: "",
      password: "",
    },
    transferData: {
      amount: 0,
    },
    authorization: {
      authorizationCode: "",
    },
  };

  const steps = [
    { component: StepLogin, name: "Login" },
    { component: StepTransferData, name: "Datos de Transferencia" },
    { component: StepAuthorization, name: "Autorización" },
  ];

  return (
    <div>
      <h2>Pago con {config.bankName}</h2>

      <StepManager
        steps={steps}
        initialData={paymentData}
        onComplete={onPaymentSuccess}
      />
    </div>
  );
};

export default BancoA;
