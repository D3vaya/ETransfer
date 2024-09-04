import { useState } from "react";
import { FormSteps } from "../../interfaces";

const StepLogin = ({
  formData,
  onNext,
}: {
  formData: FormSteps;
  onNext: (data: FormSteps) => void;
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aquí iría la lógica de autenticación específica del Banco A
    onNext({
      login: { username, password },
      transferData: { amount: 0 },
      authorization: { authorizationCode: "" },
    }); // Pasa los datos al siguiente paso
  };

  return (
    <div>
      <h3>Login </h3>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default StepLogin;
