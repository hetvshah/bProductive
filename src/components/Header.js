import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../components/contexts/AuthContext';

const Header = () => {
  const { currentUser, logout } = useAuth();

  const history = useHistory();

  console.log(currentUser);
  console.log(currentUser.displayName);

  async function handleLogout() {
    await logout();
    history.push('/login');
  }

  return (
    <div className="top">
      <div className="auth-buttons">
        <button type="submit" onClick={handleLogout} className="auth-button">
          Log Out
        </button>
        <button
          type="submit"
          className="auth-button"
          onClick={() => {
            history.push('/update-profile');
          }}
        >
          Update Profile
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
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
