import RouteContext from "../routerContexts/routeContext";
import React, { isValidElement, useContext } from "react";
export default function MyRoute({
  component,
  path
}) {
  const {
    route = null
  } = useContext(RouteContext);
  if (!route || route === undefined) {
    throw new Error("MyRoute must be used inside B_Router");
  }
  if (!route.includes(path)) return;
  if (! /*#__PURE__*/isValidElement(component)) {
    throw new Error("component must be a valid react component");
  }
  let Component = component;
  return /*#__PURE__*/React.createElement(React.Fragment, null, Component);
}