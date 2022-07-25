import { useRouter } from "next/router";
import { PropsWithChildren, useEffect } from "react";

interface Props {
  auth: any;
}

export default function AuthLayout({
  children,
  auth,
}: PropsWithChildren<Props>) {
  const router = useRouter();

  console.log("adminAuth", auth);

  useEffect(() => {
    console.log("useEffect");
    if (auth !== null) {
      router.replace("/", undefined, { shallow: true });
    }
  }, [auth]);
  return <>{children}</>;
}
