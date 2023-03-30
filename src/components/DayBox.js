

export const DayBox = ({className, style, onClick, content}) => {
  
  return <div
    className={`day-box${className}`}
    style={style}
    onClick={onClick}
  >
    {content}
  </div>;
};

