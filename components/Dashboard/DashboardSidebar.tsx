import dynamic from "next/dynamic";

import DashboardLinks from "@/components/Dashboard/DashboardLinks";

const DynamicLogo = dynamic(() => import("@/components/Logo"), {
  ssr: false,
});

export default function DashboardSidebar() {
  return (
    <div className="flex flex-col pl-6 pt-8">
      <DynamicLogo className="w-1/2" />
      <DashboardLinks />
    </div>
  );
}
