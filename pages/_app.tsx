import { QueryClient, QueryClientProvider } from "react-query";
import { atom, Provider as JotaiProvider } from "jotai";

import { createInitialValues } from "@/utils/createInitialValues";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  const { get, set } = createInitialValues();

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <JotaiProvider initialValues={get()}>
        <Component {...pageProps} />
      </JotaiProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
