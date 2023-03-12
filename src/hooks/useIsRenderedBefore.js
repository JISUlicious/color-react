import { useCallback, useRef } from "react";

export const useIsRenderedBefore = () => {
    const isRendered = useRef(false)
    return useCallback((fn) => {
    if (isRendered.current) {
        fn();  
    } else {
        isRendered.current = true;
    }
    }, []);
};