import { useRouter } from "next/router";
import { PropsWithChildren, useEffect } from "react";
import { useAtom } from "jotai";

import AdminLoginPage from "@/pages/admin/login";
import { adminAuthAtom } from "@/utils/atomConfig";

export default function AuthLayout({ children }: PropsWithChildren<{}>) {
  const router = useRouter();
  const [adminAuth] = useAtom(adminAuthAtom);

  useEffect(() => {
    if (adminAuth !== null) {
      router.replace("/", undefined, { shallow: true });
    }
  }, [adminAuth]);

  if (adminAuth === null) return <AdminLoginPage />;
  return <>{children}</>;
}
