import { useCallback } from "react";

export const useIsRenderedBefore = () => {
    return useCallback((ref, fn, fnKey) => {
    if (ref.current[fnKey]) {
        fn();  
    } else {
        ref.current = {...ref.current, [fnKey]:true};
    }
    }, []);
};