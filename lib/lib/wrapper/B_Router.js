import { useEffect, useState } from "react";
import RouteContext from "../routerContexts/routeContext.js";
import usePopState from "./customhooks/usePopState.jsx";
export default function B_Router({
  children
}) {
  const [route, setRoute] = useState("/");

  // on move back and forward
  usePopState(setRoute);
  useEffect(() => {
    window.history.pushState(null, null, route);
  }, [route]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RouteContext.Provider, {
    value: {
      route,
      setRoute
    }
  }, children));
}