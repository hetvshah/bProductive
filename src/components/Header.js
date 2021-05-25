import { Link } from 'react-router-dom';

const Header = () => {
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
              <u>Calendar</u>
            </Link>
            <Link to="/tracker">
              <u>Time Tracker</u>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
