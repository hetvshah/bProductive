import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const tasks = [
    {
      todo: 'Finish part 7 of CIS 121 programming. ',
      notes: 'Make sure to pay attention to runtimes.',
    },
    {
      todo: 'Respond to emails.',
      notes: 'Specifically John Doe and research mentor.',
    },
    {
      todo: 'Search for apartments.',
      notes: '',
    },
  ];

  const listTasks = tasks.map((task) => (
    <div className="todo">
      <h3>
        <input type="checkbox" />
        {task.todo}
      </h3>
      <p>{task.notes}</p>
    </div>
  ));

  return (
    <div>
      <div className="header">
        <p style={{ marginLeft: '7.5vw' }}>Hi Hetvi!</p>
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
      <p
        className="header"
        style={{ marginLeft: '7.5vw', fontSize: '1.25vw', marginTop: '2.5vw' }}
      >
        Today is Friday, May 21st. Here is your to-do list for today, good luck!
      </p>
      {listTasks}
    </div>
  );
};

export default Home;
