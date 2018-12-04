const Hello = (props) => {
  const { date } = props;
  const { name } = props;
  let daypart;
  if (date > 22 || date < 3) {
    daypart = 'night';
  } else if (date > 3 && date <= 12) {
    daypart = 'morning';
  } else if (date >= 12 || date < 18) {
    daypart = 'afternoon';
  } else {
    daypart = 'evening';
  }
  return name
    ? <p className="sayhi">Good {daypart}, {name}!</p>
    : <p className="sayhi">Good {daypart}!</p>;
};

export default Hello;
