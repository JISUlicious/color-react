export const Header = ({year, setYear}) => {
    // Header component
    // contains yearNavButtons, year, menuButton

    return (
      <div className="Header">
        <span className="yearNavButton" onClick={() => {setYear(year-1)}}>
          prev
        </span>
        <span>{year}</span>
        <span className="yearNavButton" onClick={() => {setYear(year+1)}}>
          next
        </span>
      </div>
    );
  };