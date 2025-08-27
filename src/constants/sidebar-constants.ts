import {
  Album,
  Armchair,
  LayoutDashboard,
  SquareMenu,
  Users,
} from "lucide-react";

export const SIDEBAR_LIST = {
  admin: [
    {
      title: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Orders",
      path: "/orders",
      icon: Album,
    },
    {
      title: "Menu",
      path: "/admin/menu",
      icon: SquareMenu,
    },
    {
      title: "Table",
      path: "/admin/table",
      icon: Armchair,
    },
    {
      title: "User",
      path: "/admin/user",
      icon: Users,
    },
  ],
  cashier: [],
  kitchen: [],
};

export type SidebarItem = keyof typeof SIDEBAR_LIST;