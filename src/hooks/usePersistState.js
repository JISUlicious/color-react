import { useState, useRef } from "react";
import { getItem, setItem } from "../functions/storage"; 
import { useEffectSkipInitialRender } from "./useEffectSkipInitialRender"; // useEffect 대체해서 사용하기
// import { useIsRenderedBefore } from "./useIsRenderedBefore"; // 첫 렌더 스킵하는 함수 리턴시키기

export const usePersistState = (key) => {
  
  const isRendered = useRef({});
  
  const storedValue = getItem(key, {});
  const [value, setValue] = useState(storedValue);
  
  // 첫 렌더 스킵하는 함수 리턴
  // const isRenderedBefore = useIsRenderedBefore();
  // useEffect(() => isRenderedBefore(isRendered,()=>{
  //   setItem(key, JSON.stringify(value));
  // }, "setItem"), [value]);

  // useEffect(() => isRenderedBefore(isRendered, ()=>{
  //   const storedValue = getItem(key);
  //   setValue(storedValue);
  // }, "getStoredValue"), [key]);
  

  // useEffect 대체 하는 방법
  useEffectSkipInitialRender(isRendered, ()=>{
    setItem(key, JSON.stringify(value));
  }, "setItem", [value]);

  useEffectSkipInitialRender(isRendered, ()=>{
    const storedValue = getItem(key);
    setValue(storedValue);
  }, "getStoredValue", [key]);

  return [value, setValue];
};