// PluginLoader.js
import { Suspense, useEffect, useState } from "react";
import { BankAConfig } from "../../../plugins/bank-integrations/bank-a/interfaces";

// Función para cargar los plugins de forma dinámica
const loadBankPlugin = async (bankName: string) => {
  try {
    // Carga dinámica del plugin correspondiente al banco
    const plugin: { default: React.ComponentType<any> } = await import(
      `../../../plugins/bank-integrations/${bankName}/index`
    );

    // Carga dinámica de las configuraciones correspondiente al banco
    const config = await import(
      `../../../plugins/bank-integrations/${bankName}/config.json`
    );

    return { Component: plugin.default, config: config.default };
  } catch (error) {
    console.error(`Error cargando el plugin para ${bankName}:`, error);
    return null;
  }
};

interface PluginLoaderProps {
  bankName: string;
  onPluginLoaded: (paymentData: any) => void;
}
const PluginLoader: React.FC<PluginLoaderProps> = ({
  bankName,
  onPluginLoaded,
}) => {
  const [plugin, setPlugin] = useState<{
    Component: React.ComponentType<any>;
    config: BankAConfig;
  } | null>(null);

  useEffect(() => {
    loadBankPlugin(bankName).then(setPlugin);
  }, [bankName]);

  if (!plugin) return <div>Loading...</div>;

  const { Component, config } = plugin;

  // Pasar configuración y callback al componente plugin
  return (
    <Suspense fallback={<div>Loading plugin...</div>}>
      <Component config={config} onPaymentSuccess={onPluginLoaded} />
    </Suspense>
  );
};

export default PluginLoader;
