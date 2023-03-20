import {useState, useEffect, useMemo} from "react";
import { getItem, setItem } from "../functions/storage"; 
import { useEffectSkipInitialRender } from "./useEffectSkipInitialRender";

export const usePersistState = (key, defaultValue) => {

  const [value, _setValue] = useState(defaultValue);
  const channel = useMemo(() => {
    const channel = new BroadcastChannel(key);
    channel.onmessage = (event) => {
      _setValue(event.data);
    };
    return channel;}, [key]);
  const setValue = (value) => {
    _setValue(value);
    setItem(key, value).catch(error => console.log(error));
    channel.postMessage(value);
  };

  useEffect(()=>{
    getItem(key)
    .then(res => _setValue(res))
    .catch(error => console.log(error));
  }, [key]);

  return [value, setValue];
};