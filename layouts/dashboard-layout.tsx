/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom } from "jotai";
import Head from "next/head";
import { useRouter } from "next/router";
import type { PropsWithChildren } from "react";
import { useEffect } from "react";

import DashboardProfile from "@/components/Dashboard/DashboardProfile";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import DefaultLayout from "@/layouts/default-layout";
import { adminAuthAtom } from "@/utils/atomConfig";

import "react-toastify/dist/ReactToastify.css";

interface Props {
  title: string;
}

export default function DashboardLayout({
  children,
  title,
}: PropsWithChildren<Props>) {
  const [adminAuth] = useAtom(adminAuthAtom);
  const router = useRouter();

  useEffect(() => {
    if (adminAuth === null) {
      router.push("/admin/login");
    }
  }, []);

  return (
    <DefaultLayout>
      <div className="admin w-full grid grid-cols-6 bg-white">
        <Head>
          <title>Admin | Live healthy stores | {title}</title>
        </Head>
        <DashboardSidebar />
        {children}
        <DashboardProfile />
      </div>
      <style jsx>{`
        .admin {
          height: 100vh;
        }
      `}</style>
    </DefaultLayout>
  );
}
