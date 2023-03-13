import { useContext } from "react";
import { dateToKey } from "../functions/dateToKey";
import { usePersistState } from "../hooks/usePersistState";
import { referenceColors } from "../params";
import { RecordContext } from "../App";

export const DayBox = ({date, gridArea, disabled, indices, setDate, children}) => {
  const key = dateToKey(date);
  
  const [record, setRecord] = usePersistState(key, null);
  const [forwardRecord, setForwardRecord] = useContext(RecordContext);

  const onClick = () => {
    setDate(date);
    setForwardRecord([record, setRecord]);
  };
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
}