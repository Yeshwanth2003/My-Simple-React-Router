import React, { useContext } from "react";
import RouteContext from "../routerContexts/routeContext";
export default function useMyNavigate() {
  const {
    setRoute
  } = useContext(RouteContext);
  if (!setRoute || setRoute === undefined) {
    throw new Error("useMyNavigate hook must be used inside B_Router");
  }
  return to => {
    if (!(typeof to === "string")) {
      throw new Error("To must be a string");
    } else if (!to.startsWith("/")) {
      throw new Error("to must be an path");
    }
    setRoute(to);
  };
}