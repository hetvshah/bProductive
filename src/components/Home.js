import './Styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const ongoingTasks = [
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

  const completedTasks = [
    {
      todo: 'Call mom. ',
      notes: 'Ask about trip to NYC.',
    },
  ];

  const listOngoingTasks = ongoingTasks.map((task) => (
    <div className="todo">
      <div>
        <h3>
          {/* <input type="checkbox" /> */}
          {task.todo}
        </h3>
        <p>{task.notes}</p>
      </div>

      <div className="times">15m / 30m</div>
    </div>
  ));

  const listCompletedTasks = completedTasks.map((task) => (
    <div className="todo todo-complete">
      <div>
        <h3>{task.todo}</h3>
        <p>{task.notes}</p>
      </div>

      <div className="times">15m / 30m</div>
    </div>
  ));

  return (
    <div>
      <div className="header">
        <p style={{ marginLeft: '7.5vw' }}>Hi Hetvi!</p>
        <div className="topLinks">
          <p>
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
        Today is Friday, May 21st. Here is your to-do list, good luck!
      </p>

      <h2 style={{ padding: '0 0 0.5vw 0', marginLeft: '7.5vw' }}>
        Ongoing Tasks
      </h2>
      {listOngoingTasks}
      <h2 style={{ padding: '0.5vw 0', marginLeft: '7.5vw' }}>
        Completed Tasks
      </h2>
      {listCompletedTasks}
    </div>
  );
};

export default Home;
