import BRouter from "./lib/wrapper/BRouter.jsx";
import useMyNavigate from "./lib/do-routing/useMyNavigate.jsx";
import MyLink from "./lib/do-routing/MyLink.jsx";
import MyRoute from "./lib/route-handler/MyRoute.jsx";
function mkFun() {
  console.log("LoL......");
}
export { BRouter, MyLink, useMyNavigate, MyRoute, mkFun };