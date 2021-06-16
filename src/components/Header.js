import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../components/contexts/AuthContext';

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

  const { currentUser, logout } = useAuth();

  const history = useHistory();

  async function handleLogout() {
    await logout();
    history.push('/login');
  }

  return (
    <div>
      <div className="auth-buttons">
        {/* <label>
        <strong>Email: </strong> {currentUser.email}
      </label> */}
        <button
          type="submit"
          className="auth-button"
          onClick={() => {
            history.push('/update-profile');
          }}
        >
          Update Profile
        </button>

        <button type="submit" onClick={handleLogout} className="auth-button">
          Log Out
        </button>
      </div>

      <div className="header">
        <p>👋 Hi {currentUser.displayName}!</p>
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
