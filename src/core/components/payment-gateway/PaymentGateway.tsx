import React, { useState } from "react";
import PluginLoader from "../plugin-loader/PluginLoader";

const PaymentGateway = () => {
  const [selectedBank, setSelectedBank] = useState("");

  const handleBankSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBank(e.target.value);
  };

  const handlePaymentSuccess = () => {
    alert("Pago realizado con éxito.");
  };

  return (
    <div>
      <h1>Selecciona tu Banco para Pagar</h1>
      <select onChange={handleBankSelect}>
        <option value="">Seleccionar Banco</option>
        <option value="bank-a">Banco A</option>
        <option value="bank-b">Banco B</option>
        {/* Añadir más opciones según los bancos soportados */}
      </select>

      {selectedBank && (
        <PluginLoader
          bankName={selectedBank}
          onPluginLoaded={handlePaymentSuccess}
        />
      )}
    </div>
  );
};

export default PaymentGateway;
