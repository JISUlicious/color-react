import { dateToKey } from "../functions/dateToKey";
import { usePersistState } from "../hooks/usePersistState";
import { referenceColors } from "../params";

export const DayBox = ({date, gridArea, disabled, indices, setDate, setContext, children}) => {
  const key = dateToKey(date);
  
  const [record, setRecord] = usePersistState(key, null);
  
  const onClick = () => {
    setDate(date);
    setContext([record, setRecord]);
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