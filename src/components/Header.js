/* 
Header component
contains yearNavButtons, year, menuButton
*/
import { MdMenu, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import {
  useCalendarContext,
  useCalendarDispatcherContext
} from "../contexts/CalenderContext";

export const Header = () => {
  const calendarState = useCalendarContext();
  const calendarStateDispatcher = useCalendarDispatcherContext();
  
  const year = calendarState.year;
  return (
    <div className="header">
      <button
        onClick={() => calendarStateDispatcher({
          type: "showMenu",
          showMenu: true
        })}
        className="side-button menu-button"
      >
        <MdMenu />
      </button>
      <div className="year-buttons">
        <button className="year-nav-button" onClick={() => calendarStateDispatcher({
          type: "decYear"
        })}>
          <MdKeyboardDoubleArrowLeft />
        </button>
        <span>{year}</span>
        <button className="year-nav-button" onClick={() => calendarStateDispatcher({
          type: "incYear"
        })}>
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
      <button className="side-button profile-button">My Calendar</button>
    </div>
  );
};