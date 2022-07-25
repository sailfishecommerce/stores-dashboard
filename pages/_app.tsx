import { QueryClient, QueryClientProvider } from "react-query";
import { atom, Provider as JotaiProvider, useAtom } from "jotai";

import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { adminAuthAtom } from "@/utils/atomConfig";
import AdminLoginPage from "./admin/login";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const [adminAuth] = useAtom(adminAuthAtom);

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <JotaiProvider>
        {adminAuth !== null ? <Component {...pageProps} /> : <AdminLoginPage />}
      </JotaiProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
