import { useEffect, useRef } from "react";

export const useEffectSkipInitialRender = (fn, depsList) => {
  const isRendered = useRef(false);
  useEffect(() => {
    if (isRendered.current) {
      fn();
    } else {
      isRendered.current = true;
    }  
  }, [...depsList]);
};
