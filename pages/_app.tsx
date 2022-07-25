import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as JotaiProvider, useAtom } from "jotai";

import type { AppProps } from "next/app";
import { adminAuthAtom } from "@/utils/atomConfig";
import AdminLoginPage from "@/pages/admin/login";
import AuthLayout from "@/layouts/auth-layout";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const [adminAuth] = useAtom(adminAuthAtom);

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <JotaiProvider>
        <AuthLayout auth={adminAuth}>
          {adminAuth !== null ? (
            <Component {...pageProps} />
          ) : (
            <AdminLoginPage />
          )}
        </AuthLayout>
      </JotaiProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
