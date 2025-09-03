import type IProviders from "./Providers.types";
import { PrimeReactProvider } from "primereact/api";

const Providers = ({ children }: IProviders) => {
  return (
    <>
      <PrimeReactProvider>{children}</PrimeReactProvider>
    </>
  );
};

export default Providers;
