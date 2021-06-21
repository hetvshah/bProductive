import { GrCheckmark } from 'react-icons/gr';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsFillTrashFill, BsPlayFill } from 'react-icons/bs';
import { IoMdPause } from 'react-icons/io';
import './Styles.css';
import moment from 'moment';
import { useState } from 'react';

const OngoingTasks = ({ ongoingTasks, onMove, onDelete }) => {
  const [play, setPlay] = useState(true);
  const filteredTasks = ongoingTasks.filter((task) => task.displayTask);

  // function displayDate(task, formatType) {
  //   return task.start === '' && task.end === ''
  //     ? ''
  //     : task.start.toDateString() === task.end.toDateString()
  //     ? '(Due) Date: ' + moment(task.start).format(formatType)
  //     : '(Due) Date: ' +
  //       moment(task.start).format(formatType) +
  //       ' to ' +
  //       moment(task.end).format(formatType);
  // }

  if (filteredTasks.length > 0) {
    // setPlay(true);
    const listOngoingTasks = filteredTasks.map((task) => (
      <div className="todo">
        <div>
          <h3>{task.title}</h3>
          <p>
            {/* {task.specificTime
              ? displayDate(task, 'MMMM Do [at] LT')
              : displayDate(task, 'MMMM Do')} */}
            {task.specificTime
              ? task.start === '' && task.end === ''
                ? ''
                : new Date(task.start).toDateString() ===
                  new Date(task.end).toDateString()
                ? '(Due) Date: ' +
                  moment(new Date(task.start)).format('MMMM Do [at] LT')
                : '(Due) Date: ' +
                  moment(new Date(task.start)).format('MMMM Do [at] LT') +
                  ' to ' +
                  moment(new Date(task.end)).format('MMMM Do [at] LT')
              : task.start === '' && task.end === ''
              ? ''
              : new Date(task.start).toDateString() ===
                new Date(task.end).toDateString()
              ? '(Due) Date: ' + moment(new Date(task.start)).format('MMMM Do')
              : '(Due) Date: ' +
                moment(new Date(task.start)).format('MMMM Do') +
                ' to ' +
                moment(new Date(task.end)).format('MMMM Do')}
          </p>
          <p>{task.notes === '' ? '' : 'Notes: ' + task.notes}</p>
        </div>

        <div className="times">
          {task.estimate === '' ? 'N/A' : task.estimate}
        </div>
        <div className="todo-icons">
          {/* {play ? (
            <BsPlayFill
              className="ongoing-task"
              onClick={() => setPlay(!play)}
            />
          ) : (
            <IoMdPause
              className="ongoing-task"
              onClick={() => setPlay(!play)}
            />
          )} */}
          <BsPlayFill className="ongoing-task" />
          <IoMdPause className="ongoing-task" />

          <GrCheckmark className="ongoing-task" onClick={() => onMove(task)} />
          {/* <AiOutlineEdit className="ongoing-task" /> */}
          <BsFillTrashFill
            className="ongoing-task trash"
            onClick={() => onDelete(task)}
          />
        </div>
      </div>
    ));

    return <>{listOngoingTasks}</>;
  }

  return 'No tasks to show.';
};

export default OngoingTasks;
