import { getDefaultDashboardRoute } from "@/lib/authUtils"
import { getNavItemsByRole } from "@/lib/navItems"
import { NavSection } from "@/types/dashboard.types"
import DashboardSidebarContent from "./DashboardSidebarContent"
import { getUserInfo } from "@/services/auth.services"

const DashboardSidebar = async () => {
  const userInfo = await getUserInfo()
  const navItems : NavSection[] = getNavItemsByRole(userInfo.role)

  const dashboardHome = getDefaultDashboardRoute(userInfo.role)
  return (
    <DashboardSidebarContent userInfo={userInfo} navItems={navItems} dashboardHome={dashboardHome}/>
  )
}

export default DashboardSidebar




// import { redirect } from "next/navigation";

// import { getDefaultDashboardRoute } from "@/lib/authUtils";
// import { getNavItemsByRole } from "@/lib/navItems";
// import type { NavSection } from "@/types/dashboard.types";
// import DashboardSidebarContent from "./DashboardSidebarContent";
// import { getUserInfo } from "@/services/auth.services";

// const DashboardSidebar = async () => {
//   const userInfo = await getUserInfo();

//   // Check user authentication
//   if (!userInfo || !userInfo.role) {
//     redirect("/login");
//   }

//   const navItems: NavSection[] = getNavItemsByRole(userInfo.role);

//   const dashboardHome = getDefaultDashboardRoute(userInfo.role);

//   return (
//     <DashboardSidebarContent
//       userInfo={userInfo}
//       navItems={navItems}
//       dashboardHome={dashboardHome}
//     />
//   );
// };

// export default DashboardSidebar;