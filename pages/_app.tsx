import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as JotaiProvider, useAtom } from "jotai";

import type { AppProps } from "next/app";
import AuthLayout from "@/layouts/auth-layout";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <JotaiProvider>
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      </JotaiProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
