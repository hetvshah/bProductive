import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="header">
        <p style={{ marginLeft: '3.5vw' }}>Hi Hetvi!</p>
        <div className="topLinks">
          <p className="links">
            <Link to="/planning">
              <u>Planning</u>
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
      <p className="header" style={{ marginLeft: '3.5vw', fontSize: '1.5vw' , marginTop: '2.5vw'}}>
        Today is Friday, May 21st. Here is your to-do list for today, good luck!
      </p>
    </div>
  );
};

export default Home;
