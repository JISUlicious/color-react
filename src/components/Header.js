/* 
Header component
contains yearNavButtons, year, menuButton
*/
import { MdMenu, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

export const Header = ({setMenu, year, setYear}) => {
  return (
    <div className="header">
      <button
        onClick={() => setMenu(true)}
        className="side-button menu-button"
      >
        <MdMenu />
      </button>
      <div className="year-buttons">
        <button className="year-nav-button" onClick={() => setYear(year-1)}>
          <MdKeyboardDoubleArrowLeft />
        </button>
        <span>{year}</span>
        <button className="year-nav-button" onClick={() => setYear(year+1)}>
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
      <button className="side-button profile-button">My Calendar</button>
    </div>
  );
};