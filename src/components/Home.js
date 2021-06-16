import './Styles.css';
import Button from './AddButton';
import OngoingTasks from './OngoingTasks';
import Header from './Header';
import CompletedTasks from './CompletedTasks';
import AddTask from './AddTask';
import { useAuth } from '../components/contexts/AuthContext';
import { db } from '../components/firebase';
import { useState } from 'react';
import React from 'react';

const Home = ({
  ongoingTasks,
  setOngoingTasks,
  completedTasks,
  setCompletedTasks,
  showAddTask,
  setAddTask,
  changeState,
}) => {
  const { currentUser } = useAuth();
  // const [showAdd, setShowAdd] = useState(false);

  const addOngoingTask = (task) => {
    // setOngoingTasks([...ongoingTasks, task]);

    db.ref('users/4mpCA8Nrd6b5BudHf6SMyS2Ue093/ongoingTasks').push().set({
      title: task.title,
      specificTime: task.specificTime,
      start: 'task.start',
      end: 'task.end',
      estimate: task.estimate,
      notes: task.notes,
      displayTask: task.displayTask,
      displayCalendar: task.displayCalendar,
    });
  };

  const addCompletedTask = (task) => {
    // setCompletedTasks([...completedTasks, task]);

    db.ref('users/4mpCA8Nrd6b5BudHf6SMyS2Ue093/completedTasks').push().set({
      title: task.title,
      specificTime: task.specificTime,
      start: 'task.start',
      end: 'task.end',
      estimate: task.estimate,
      notes: task.notes,
      displayTask: task.displayTask,
      displayCalendar: task.displayCalendar,
    });
  };

  const moveOngoingTask = (task) => {
    deleteOngoingTask(task);
    addCompletedTask(task);
  };

  const moveCompleteTask = (task) => {
    addOngoingTask(task);
    deleteCompletedTask(task);
  };

  const deleteOngoingTask = (task) => {
    // setOngoingTasks(ongoingTasks.filter((todo) => todo.title !== task.title));
    // console.log(
    //   db
    //     .ref('users/4mpCA8Nrd6b5BudHf6SMyS2Ue093/ongoingTasks')
    //     .child(task.title)
    // );

    db.ref('users/4mpCA8Nrd6b5BudHf6SMyS2Ue093/ongoingTasks')
      .child(task.id)
      .remove();
  };

  const deleteCompletedTask = (task) => {
    db.ref('users/4mpCA8Nrd6b5BudHf6SMyS2Ue093/completedTasks')
      .child(task.id)
      .remove();
  };

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  return (
    <div>
      <Header />
      <p style={{ fontSize: '1.25vw', marginTop: '2.5vw' }}>
        📅 Today is {today.toDateString()}. Here is your to-do list!
      </p>
      <div className="task-btn">
        <h2 style={{ padding: '0 0 0.25vw 0' }}>Ongoing Tasks</h2>
        <Button
          onClick={() => changeState(!showAddTask)}
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

      <div className="task-btn">
        <h2 style={{ padding: '0 0 0.25vw 0' }}>Completed Tasks</h2>
        <button
          className="home-btn delete"
          onClick={() => setCompletedTasks([])}
        >
          Delete All
        </button>
      </div>

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
