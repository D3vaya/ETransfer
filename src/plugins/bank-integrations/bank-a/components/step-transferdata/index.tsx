// StepTransferData.js
import { useState } from "react";
import { FormSteps } from "../../interfaces";

interface StepTransferDataProps {
  onNext: (data: FormSteps) => void;
  onPrevious: () => void;
  formData: FormSteps; // You may want to replace 'any' with a more specific type for formData
}

const StepTransferData = ({
  onNext,
  onPrevious,
  formData,
}: StepTransferDataProps) => {
  const [amount, setAmount] = useState(formData.transferData.amount);
  console.log({ transfer: formData });
  const handleTransferData = () => {
    // Lógica para recopilar datos de transferencia
    onNext({ ...formData, transferData: { amount } }); // Pasamos los datos al siguiente paso
  };

  return (
    <div>
      <h3>Datos de la Transferencia</h3>
      <input
        type="number"
        placeholder="Monto"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={onPrevious}>Volver</button>
      <button onClick={handleTransferData}>Continuar</button>
    </div>
  );
};

export default StepTransferData;
