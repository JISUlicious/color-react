import { dateToKey } from "../functions/dateToKey";
import { usePersistState } from "../hooks/usePersistState";
import { referenceColors } from "../params";

export const DayBox = ({date, gridArea, disabled, indices, onClick, children}) => {
  const key = dateToKey(date);
  const [record,] = usePersistState(key, null);

  return <div
    className={`day-box ${disabled ? "disabled" : ""}`}
    style={{
      gridArea,
      backgroundColor: `${
        disabled ? "dimgrey" 
        : record ? referenceColors[record.color] 
        : null}`,
      border: record && "1px solid black"
    }}
    onClick={disabled || indices ? null : onClick}
  >
    {children}
  </div>
}