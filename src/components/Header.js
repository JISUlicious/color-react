/* 
Header component
contains yearNavButtons, year, menuButton
*/

export const Header = ({year, setYear}) => {
  return (
    <div className="header">
      <span className="year-nav-button" onClick={() => {setYear(year-1)}}>
        prev
      </span>
      <span>{year}</span>
      <span className="year-nav-button" onClick={() => {setYear(year+1)}}>
        next
      </span>
    </div>
  );
};