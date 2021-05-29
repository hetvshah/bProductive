import { Link } from 'react-router-dom';

const Header = () => {
  //   let homeStyle = { color: 'black' };
  //   let calendarStyle = { color: 'black' };
  //   let trackerStyle = { color: 'black' };

  //   const homeClicked = () => {
  //     console.log('hello');
  //     homeStyle = { color: 'pink' };
  //     calendarStyle = { color: 'black' };
  //     trackerStyle = { color: 'black' };
  //   };

  //   const calendarClicked = () => {
  //     homeStyle = { color: 'black' };
  //     calendarStyle = { color: 'pink' };
  //     trackerStyle = { color: 'black' };
  //   };

  //   const trackerClicked = () => {
  //     homeStyle = { color: 'black' };
  //     calendarStyle = { color: 'black' };
  //     trackerStyle = { color: 'pink' };
  //   };

  return (
    <div>
      <div className="header">
        <p>👋 Hi Hetvi!</p>
        <div className="topLinks">
          <p>
            <Link to="/">
              <u>Home</u>
            </Link>
            <Link to="/calendar">
              <u className="calendar-link">Calendar</u>
            </Link>
            <Link to="/tracker">
              <u className="tracker-link">Time Tracker</u>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
