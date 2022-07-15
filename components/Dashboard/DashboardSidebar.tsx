import DashboardLinks from "@/components/DashboardLinks";
import Logo from "@/components/Logo";

export default function DashboardSidebar() {
  return (
    <div className="flex flex-col pl-6 pt-8">
      <Logo className="w-1/2" />
      <DashboardLinks />
    </div>
  );
}
