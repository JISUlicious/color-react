/* 
Header component
contains yearNavButtons, year, menuButton
*/

export const Header = ({setMenu, year, setYear}) => {
  return (
    <div className="header">
      <button
        onClick={() => {setMenu(true);}}
        className="side-button menu-button"
      >
        |||
      </button>
      <div className="year-buttons">
        <button className="year-nav-button" onClick={() => {setYear(year-1);}}>
          prev
        </button>
        <span>{year}</span>
        <button className="year-nav-button" onClick={() => {setYear(year+1);}}>
          next
        </button>
      </div>
      <button className="side-button profile-button">My Calendar</button>
    </div>
  );
};