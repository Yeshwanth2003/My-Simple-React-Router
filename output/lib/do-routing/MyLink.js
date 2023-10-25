import { useContext, useEffect, useRef } from "react";
import RouteContext from "../routerContexts/routeContext";
export default function MyLink({
  to,
  noAction,
  children
}) {
  const {
    setRoute
  } = useContext(RouteContext);
  const linkRef = useRef();
  if (!setRoute || setRoute === undefined) {
    throw new Error("MyLink component should be used inside B_Router' child component");
  }
  useEffect(() => {
    linkRef.current.addEventListener("click", ev => {
      ev.preventDefault();
      if (noAction) return;
      setRoute(to);
    });
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    ref: linkRef,
    href: to
  }, children));
}