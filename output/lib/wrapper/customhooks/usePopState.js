import React, { useEffect } from "react";
export default function usePopState(setRoute) {
  useEffect(() => {
    window.addEventListener("popstate", ev => {
      if (!ev.state?.to) {
        setRoute("/");
        return;
      }
      const to = ev.state.to;
      setRoute(to);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}