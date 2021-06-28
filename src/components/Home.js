import './Styles.css';
import Button from './AddButton';
import OngoingTasks from './OngoingTasks';
import Header from './Header';
import CompletedTasks from './CompletedTasks';
import AddTask from './AddTask';
import EditTask from './EditTask';
import { useAuth } from '../components/contexts/AuthContext';
import { db } from '../components/firebase';
import React from 'react';
import { useState } from 'react';

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
  const [currentTask, setCurrentTask] = useState();
  const [display, setDisplay] = useState(false);
  const [edit, setEdit] = useState(false);
  // const [showAdd, setShowAdd] = useState(false);

  const addOngoingTask = (task, specificDay) => {
    // setOngoingTasks([...ongoingTasks, task]);
    if (specificDay) {
      db.ref('users/' + currentUser.uid + '/ongoingTasks')
        .push()
        .set({
          title: task.title,
          specificTime: task.specificTime,
          start: task.start.toString(),
          end: task.end.toString(),
          estimateHours: task.estimateHours,
          estimateMin: task.estimateMin,
          notes: task.notes,
          displayTask: task.displayTask,
          displayCalendar: task.displayCalendar,
          timeSpent: task.timeSpent,
        });
    } else {
      db.ref('users/' + currentUser.uid + '/ongoingTasks')
        .push()
        .set({
          title: task.title,
          specificTime: task.specificTime,
          start: '',
          end: '',
          estimateHours: task.estimateHours,
          estimateMin: task.estimateMin,
          notes: task.notes,
          displayTask: task.displayTask,
          displayCalendar: task.displayCalendar,
          timeSpent: task.timeSpent,
        });
    }
  };

  const addCompletedTask = (task) => {
    // setCompletedTasks([...completedTasks, task]);

    db.ref('users/' + currentUser.uid + '/completedTasks')
      .push()
      .set({
        title: task.title,
        specificTime: task.specificTime,
        start: task.start.toString(),
        end: task.end.toString(),
        estimateHours: task.estimateHours,
        estimateMin: task.estimateMin,
        notes: task.notes,
        displayTask: task.displayTask,
        displayCalendar: task.displayCalendar,
        timeSpent: task.timeSpent,
      });
  };

  const moveOngoingTask = (task) => {
    deleteOngoingTask(task);
    addCompletedTask(task);
  };

  const moveCompleteTask = (task) => {
    addOngoingTask(task, true);
    deleteCompletedTask(task);
  };

  const deleteOngoingTask = (task) => {
    db.ref('users/' + currentUser.uid + '/ongoingTasks')
      .child(task.id)
      .remove();
  };

  const deleteCompletedTask = (task) => {
    db.ref('users/' + currentUser.uid + '/completedTasks')
      .child(task.id)
      .remove();
  };

  const addTimeSpent = (task, time) => {
    console.log(task.timeSpent);
    console.log(time);
    console.log(Number(time));
    task.timeSpent = task.timeSpent + time;
    console.log(task.timeSpent);
    db.ref('users/' + currentUser.uid + '/ongoingTasks')
      .child(task.id)
      .update({
        timeSpent: task.timeSpent,
      });
  };

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  var totalEstHours = 0;
  var totalEstMin = 0;
  var totalWorkedHours = 0;
  var totalWorkedMin = 0;

  // db.ref('users/' + currentUser.uid + '/ongoingTasks').on(
  //   'value',
  //   (snapshot) => {
  ongoingTasks.map((task) => {
    totalEstHours += parseFloat(task.estimateHours);
    totalEstMin += parseFloat(task.estimateMin);
    totalWorkedMin += task.timeSpent;
  });

  totalWorkedMin = Math.round(totalWorkedMin);

  totalEstHours += Math.floor(totalEstMin / 60);
  totalEstMin = totalEstMin % 60;
  totalWorkedHours += Math.floor(totalWorkedMin / 60);
  totalWorkedMin = totalWorkedMin % 60;
  // }
  // );

  return (
    <div>
      <Header />
      <p style={{ fontSize: '1.25vw', marginTop: '2.5vw' }}>
        📅 Today is {today.toDateString()}. Here is your to-do list!
      </p>

      {display && (
        <div className="current-title">
          WORKING ON TASK "{currentTask.title}"
        </div>
      )}

      <div className="task-btn">
        <h2 style={{ padding: '0 0 0.25vw 0', fontSize: '1.5vw' }}>
          Ongoing Tasks
        </h2>
        <Button
          onClick={() => changeState(!showAddTask)}
          showAddTask={showAddTask}
        />
      </div>

      <div className="summary">
        <span>
          Estimated Time Needed: ~ {totalEstHours + 'h ' + totalEstMin + 'm'}
        </span>
        <span>
          Time Worked: ~ {totalWorkedHours + 'h ' + totalWorkedMin + 'm'}
        </span>
      </div>

      {edit && <EditTask setEdit={setEdit} currentTask={currentTask} />}

      {showAddTask && <AddTask onAdd={addOngoingTask} />}
      {ongoingTasks.length > 0 ? (
        <OngoingTasks
          ongoingTasks={ongoingTasks}
          onMove={moveOngoingTask}
          onDelete={deleteOngoingTask}
          onPause={addTimeSpent}
          setCurrentTask={setCurrentTask}
          setDisplay={setDisplay}
          setEdit={setEdit}
        />
      ) : (
        'No tasks to show.'
      )}

      <div className="task-btn">
        <h2 style={{ padding: '0 0 0.25vw 0', fontSize: '1.5vw' }}>
          Completed Tasks
        </h2>
        <button
          className="home-btn delete"
          onClick={() => {
            // for (var i = 0; i < completedTasks.length; i++) {
            //   console.log(completedTasks[i]);
            //   deleteCompletedTask(completedTasks[i]);
            // }
            // completedTasks.map((task) => {
            //   deleteCompletedTask(task);
            // });
            db.ref('users/' + currentUser.uid + '/completedTasks').remove();
          }}
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
