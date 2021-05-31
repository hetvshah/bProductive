import Home from './components/Home';
import Tracker from './components/Tracker';
import Calendar from './components/Calendar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [showAddTask, setAddTask] = useState(false);

  const [ongoingTasks, setOngoingTasks] = useState([
    {
      title: 'Finish part 7 of CIS 121 programming. ',
      allDay: false,
      day: 'Feb 7th at 1:30 pm ',
      estimate: '15m',
      notes: 'Make sure to pay attention to runtimes. ',
      displayTask: true,
      displayCalendar: true,
    },
    {
      title: 'Respond to emails.',
      allDay: false,
      day: 'Feb 21st at midnight',
      estimate: '2m',
      notes: 'Specifically John Doe and research mentor.',
      displayTask: true,
      displayCalendar: false,
    },
    {
      title: 'Search for apartments.',
      allDay: true,
      day: '',
      estimate: '3hr',
      notes: '',
      displayTask: true,
      displayCalendar: true,
    },
  ]);

  const [completedTasks, setCompletedTasks] = useState([
    {
      title: 'Call mom. ',
      day: '',
      estimate: '1hr',
      notes: 'Ask about trip to NYC.',
      displayTask: true,
      displayCalendar: true,
    },
    {
      title: 'Call dad. ',
      day: '',
      estimate: '2hr',
      notes: 'Buy textbooks.',
      displayTask: true,
      displayCalendar: true,
    },
  ]);

  return (
    <Router>
      <Route
        exact
        path="/"
        render={(props) => (
          <Home
            ongoingTasks={ongoingTasks}
            setOngoingTasks={setOngoingTasks}
            completedTasks={completedTasks}
            setCompletedTasks={setCompletedTasks}
            showAddTask={showAddTask}
            setAddTask={setAddTask}
          />
        )}
      />
      <Route exact path="/tracker" render={(props) => <Tracker />} />
      <Route exact path="/calendar" render={(props) => <Calendar />} />
    </Router>
  );
}

export default App;
