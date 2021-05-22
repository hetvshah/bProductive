import './Styles.css';
import { Link } from 'react-router-dom';
import Button from './Button';
import OngoingTasks from './OngoingTasks';
import CompletedTasks from './CompletedTasks';
import AddTask from './AddTask';
import { useState } from 'react';

const Home = () => {
  const [showAddTask, setAddTask] = useState(false);

  const [ongoingTasks, setOngoingTasks] = useState([
    {
      text: 'Finish part 7 of CIS 121 programming. ',
      day: 'Feb 7th at 1:30 pm ',
      estimate: '15m',
      notes: 'Make sure to pay attention to runtimes. ',
      displayTask: true,
      displayCalendar: true,
    },
    {
      text: 'Respond to emails.',
      day: 'Feb 21st at midnight',
      estimate: '2m',
      notes: 'Specifically John Doe and research mentor.',
      displayTask: true,
      displayCalendar: false,
    },
    {
      text: 'Search for apartments.',
      day: 'June 15th at noon',
      estimate: '3hr',
      notes: '',
      displayTask: false,
      displayCalendar: true,
    },
  ]);

  const addTask = (task) => {
    setOngoingTasks([...ongoingTasks, task]);
  };

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
        <h2 style={{ padding: '0 0 0.25vw 0' }}>Ongoing Tasks</h2>
        <Button
          onClick={() => setAddTask(!showAddTask)}
          showAddTask={showAddTask}
        />
      </div>

      {showAddTask && <AddTask onAdd={addTask} />}

      <OngoingTasks ongoingTasks={ongoingTasks} />
      <h2 style={{ padding: '1vw 0' }}>Completed Tasks</h2>
      <CompletedTasks />
    </div>
  );
};

export default Home;
