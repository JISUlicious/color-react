import { forwardRef } from "react";
import { dateToKey } from "../functions/dateToKey";
import { usePersistState } from "../hooks/usePersistState";
import { referenceColors } from "../params";

export const DayBox = forwardRef(({date, gridArea, disabled, indices, setDate, children}, ref) => {
  const key = dateToKey(date);
  const [record, setRecord] = usePersistState(key,null);
  const onClick = () => {
    setDate(date);
    ref.current = [record, setRecord];
  }
  return <div
    className={`day-box ${disabled ? "disabled" : ""}`}
    style={{
      gridArea,
      backgroundColor: `${
        disabled ? "dimgrey" 
        : record ? referenceColors[record.color] 
        : null}`,
      border: record ? "1px solid black" : null
    }}
    onClick={disabled || indices ? null : onClick}
  >
    {children}
  </div>
});