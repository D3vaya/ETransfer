import { useState } from "react";
import { FormSteps } from "../../../plugins/bank-integrations/bank-a/interfaces";

interface StepManagerProps {
  steps: any[];
  initialData: any;
  onComplete: (data: any) => void;
}
const StepManager: React.FC<StepManagerProps> = ({
  steps,
  initialData,
  onComplete,
}) => {
  // Estado que mantiene el índice del paso actual y los datos ingresados
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState<FormSteps>(initialData);

  // Obtener el componente del paso actual
  const CurrentStep = steps[currentStepIndex].component;

  console.log({ formData });

  // Función para avanzar al siguiente paso
  const goToNextStep = (data: FormSteps) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setCurrentStepIndex((prevIndex) => prevIndex + 1);
  };

  // Función para retroceder al paso anterior
  const goToPreviousStep = () => {
    setCurrentStepIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  // Función para manejar la finalización del flujo
  const handleComplete = () => {
    onComplete(formData); // Puedes enviar los datos finales a un backend, etc.
  };

  return (
    <>
      <div>
        <CurrentStep
          onNext={
            currentStepIndex < steps.length - 1 ? goToNextStep : handleComplete
          }
          onPrevious={goToPreviousStep}
          formData={formData}
        />
        <div style={{ marginTop: "20px" }}>
          {currentStepIndex > 0 && (
            <button onClick={goToPreviousStep}>Anterior</button>
          )}
          {currentStepIndex < steps.length - 1 ? (
            <button onClick={() => goToNextStep(formData)}>Siguiente</button>
          ) : (
            <button onClick={handleComplete}>Finalizar</button>
          )}
        </div>
      </div>
      <pre>
        <code>{JSON.stringify(formData, null, 2)}</code>
      </pre>
    </>
  );
};

export default StepManager;
