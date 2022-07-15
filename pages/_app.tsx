import { QueryClient, QueryClientProvider } from "react-query";
import { atom, Provider as JotaiProvider } from "jotai";

import { createInitialValues } from "@/utils/createInitialValues";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  const { get, set } = createInitialValues();

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <JotaiProvider>
        <Component {...pageProps} />
      </JotaiProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
