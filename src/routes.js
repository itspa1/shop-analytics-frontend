import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import PiSniff from "views/PiSniff.js";
import Iframe from "views/Iframe.js";
import About from "components/about.js";

var routes = [
  {
    path: "/piSniff",
    name: "Pi Sniff",
    icon: "tim-icons icon-wifi",
    component: PiSniff,
    layout: "/main",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/main",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/main",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/main",
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/main",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/main",
  },
  {
    path: "/iframe",
    name: "Analytics",
    icon: "tim-icons icon-chart-bar-32",
    component: Iframe,
    layout: "/main",
  },
  {
    path: "/about",
    name: "About",
    icon: "tim-icons icon-alert-circle-exc",
    component: About,
    layout: "/main",
  },
];

export default routes;
