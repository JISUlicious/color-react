/* 
Header component
contains yearNavButtons, year, menuButton
*/
import { MdMenu, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import {
  useCalendarContext,
  useCalendarDispatchContext,
  actionCreator
} from "../contexts/CalendarContext";

export const Header = ({showMenu}) => {
  const {year} = useCalendarContext();
  const calendarStateDispatch = useCalendarDispatchContext();
  
  return (
    <div className="header">
      <button
        onClick={() => {showMenu(true);}}
        className="side-button menu-button"
      >
        <MdMenu />
      </button>
      <div className="year-buttons">
        <button
          className="year-nav-button"
          onClick={() => calendarStateDispatch(actionCreator.setYear(-1))}>
          <MdKeyboardDoubleArrowLeft />
        </button>
        <span>{year}</span>
        <button
          className="year-nav-button"
          onClick={() => calendarStateDispatch(actionCreator.setYear(1))}>
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
      <button className="side-button profile-button">My Calendar</button>
    </div>
  );
};