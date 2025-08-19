import { Box, Home, Info } from "lucide-react";
import type { MenuItem } from "../Interface/Menu";

const menuData: MenuItem[] = [
  {
    title: "Home",
    icon: <Home size={20} />,
    path: "/",
  },
  {
    title: "About",
    icon: <Info size={20} />,
    path: "/about",
  },
  {
    title: "Tabs",
    icon: <Box size={20} />,
    path: "/ui-block/tabs",
  },
  {
    title: "Hero Section",
    icon: <Box size={20} />,
    path: "/block/hero-section",
  },
//   {
//     title: "Dashboard",
//     children: [
//       { title: "Analytics", path: "/dashboard/analytics" },
//       { title: "Reporting", path: "/dashboard/reporting" },
//       { title: "Projects", path: "/dashboard/projects" },
//     ],
//   },
//   {
//     title: "E-Commerce",
//     children: [
//       { title: "Orders", path: "/ecommerce/orders" },
//       { title: "Products", path: "/ecommerce/products" },
//     ],
//   },
];

export default menuData;