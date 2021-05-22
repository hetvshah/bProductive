import './Styles.css';
import { Link } from 'react-router-dom';
import Button from './Button';
import OngoingTasks from './OngoingTasks';
import CompletedTasks from './CompletedTasks';
import AddTask from './AddTask';
import { useState } from 'react';

const Home = () => {
  const [ongoingTasks, setOngoingTasks] = useState([
    {
      todo: 'Finish part 7 of CIS 121 programming. ',
      notes: 'Make sure to pay attention to runtimes. ',
    },
    {
      todo: 'Respond to emails.',
      notes: 'Specifically John Doe and research mentor.',
    },
    {
      todo: 'Search for apartments.',
      notes: '',
    },
  ]);

  // const ongoingTasks = [
  //   {
  //     todo: 'Finish part 7 of CIS 121 programming. ',
  //     notes: 'Make sure to pay attention to runtimes.',
  //   },
  //   {
  //     todo: 'Respond to emails.',
  //     notes: 'Specifically John Doe and research mentor.',
  //   },
  //   {
  //     todo: 'Search for apartments.',
  //     notes: '',
  //   },
  // ];

  // const completedTasks = [
  //   {
  //     todo: 'Call mom. ',
  //     notes: 'Ask about trip to NYC.',
  //   },
  // ];

  // const listOngoingTasks = ongoingTasks.map((task) => (
  //   <div className="todo">
  //     <div>
  //       <h3>
  //         {/* <input type="checkbox" /> */}
  //         {task.todo}
  //       </h3>
  //       <p>{task.notes}</p>
  //     </div>

  //     <div className="times">15m / 30m</div>
  //   </div>
  // ));

  // const listCompletedTasks = completedTasks.map((task) => (
  //   <div className="todo todo-complete">
  //     <div>
  //       <h3>{task.todo}</h3>
  //       <p>{task.notes}</p>
  //     </div>

  //     <div className="times">15m / 30m</div>
  //   </div>
  // ));

  return (
    <div>
      <div className="header">
        <p>👋 Hi Hetvi!</p>
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
      <p className="header" style={{ fontSize: '1.25vw', marginTop: '2.5vw' }}>
        📅 Today is Friday, May 21st. Here is your to-do list, good luck!
      </p>

      <div className="task-btn">
        <h2 style={{ padding: '0 0 0.5vw 0' }}>Ongoing Tasks</h2>
        <Button />
      </div>

      <AddTask />

      <OngoingTasks ongoingTasks={ongoingTasks} />
      <h2 style={{ padding: '0.5vw 0' }}>Completed Tasks</h2>
      <CompletedTasks />
    </div>
  );
};

export default Home;
