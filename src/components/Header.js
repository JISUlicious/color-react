/* 
Header component
contains yearNavButtons, year, menuButton
*/

export const Header = ({year, setYear}) => {
  return (
    <div className="header">
      <button className="side-button menu">///</button>
      <div className="year-buttons">
        <button className="year-nav-button" onClick={() => {setYear(year-1)}}>
          prev
        </button>
        <span>{year}</span>
        <button className="year-nav-button" onClick={() => {setYear(year+1)}}>
          next
        </button>
      </div>
      <button className="side-button profile">///</button>
    </div>
  );
};