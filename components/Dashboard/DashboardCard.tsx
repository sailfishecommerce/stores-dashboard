import { useAtom } from "jotai";

import { adminAuthAtom } from "@/utils/atomConfig";
import greetUser from "@/utils/greetUser";

export default function DashboardCard() {
  const [adminAuth] = useAtom(adminAuthAtom);

  return (
    <div className="dashboard-banner mb-12 flex justify-between w-full bg-yellow-100 rounded-xl p-10 my-12">
      <div className="left">
        <h2 className="text-yellow-900 font-bold text-2xl lg:text-xl">
          Welcome back{" "}
          <span className="mountain-mist">{adminAuth?.email} </span>
        </h2>
        <p className="text-lg">Welcome to Livehealthy stores. 🛒</p>
      </div>
      <div className="right">
        <h2 className="text-2xl font-bold lg:text-xl">{greetUser()}, ☀️</h2>
        <p className="text-lg">Here&#39;s the latest activity in your store.</p>
      </div>
    </div>
  );
}
