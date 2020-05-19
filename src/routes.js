import Dashboard from "views/Dashboard.js";
import PiSniff from "views/PiSniff.js";
import Iframe from "views/Iframe.js";
import About from "components/about.js";
import DebugFrame from "views/DebugFrame";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/main",
  },
  {
    path: "/piSniff",
    name: "Pi Sniff",
    icon: "tim-icons icon-wifi",
    component: PiSniff,
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
    path: "/debug",
    name: "Debug Camera",
    icon: "tim-icons icon-chart-bar-32",
    component: DebugFrame,
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
