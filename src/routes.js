import PiSniff from "views/PiSniff.js";
import Iframe from "views/Iframe.js";
import About from "components/about.js";
import DebugFrame from "views/DebugFrame";

var routes = [
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
    name: "Camera Preview",
    icon: "tim-icons icon-camera-18",
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
