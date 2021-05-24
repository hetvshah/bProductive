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
      day: '',
      estimate: '3hr',
      notes: '',
      displayTask: true,
      displayCalendar: true,
    },
  ]);

  const [completedTasks, setCompletedTasks] = useState([
    {
      text: 'Call mom. ',
      day: '',
      estimate: '1hr',
      notes: 'Ask about trip to NYC.',
      displayTask: true,
      displayCalendar: true,
    },
    {
      text: 'Call dad. ',
      day: '',
      estimate: '2hr',
      notes: 'Buy textbooks.',
      displayTask: true,
      displayCalendar: true,
    },
  ]);

  const addOngoingTask = (task) => {
    setOngoingTasks([...ongoingTasks, task]);
  };

  const moveOngoingTask = (task) => {
    setOngoingTasks(ongoingTasks.filter((todo) => todo.text !== task.text));
    deleteOngoingTask(task);
  };

  const moveCompleteTask = (task) => {
    addOngoingTask(task);
    deleteCompletedTask(task);
  };

  const deleteOngoingTask = (task) => {
    setOngoingTasks(ongoingTasks.filter((todo) => todo.text !== task.text));
  };

  const deleteCompletedTask = (task) => {
    setCompletedTasks(completedTasks.filter((todo) => todo.text !== task.text));
  };

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

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
        📅 Today is {today.toDateString()}. Here is your to-do list!
      </p>

      <div className="task-btn">
        <h2 style={{ padding: '0 0 0.25vw 0' }}>Ongoing Tasks</h2>
        <Button
          onClick={() => setAddTask(!showAddTask)}
          showAddTask={showAddTask}
        />
      </div>

      {showAddTask && <AddTask onAdd={addOngoingTask} />}
      {ongoingTasks.length > 0 ? (
        <OngoingTasks
          ongoingTasks={ongoingTasks}
          onMove={moveOngoingTask}
          onDelete={deleteOngoingTask}
        />
      ) : (
        'No tasks to show.'
      )}

      <h2 style={{ paddingTop: '1vw' }}>Completed Tasks</h2>
      {completedTasks.length > 0 ? (
        <CompletedTasks
          completedTasks={completedTasks}
          onMove={moveCompleteTask}
          onDelete={deleteCompletedTask}
        />
      ) : (
        'No tasks to show.'
      )}
    </div>
  );
};

export default Home;
