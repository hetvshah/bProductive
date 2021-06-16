import { GrCheckmark } from 'react-icons/gr';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import './Styles.css';
import moment from 'moment';

const OngoingTasks = ({ ongoingTasks, onMove, onDelete }) => {
  const filteredTasks = ongoingTasks.filter((task) => task.displayTask);

  function displayDate(task, formatType) {
    return task.start === '' && task.end === ''
      ? ''
      : task.start.toDateString() === task.end.toDateString()
      ? '(Due) Date: ' + moment(task.start).format(formatType)
      : '(Due) Date: ' +
        moment(task.start).format(formatType) +
        ' to ' +
        moment(task.end).format(formatType);
  }

  if (filteredTasks.length > 0) {
    const listOngoingTasks = filteredTasks.map((task) => (
      <div className="todo">
        <div>
          <h3>{task.title}</h3>
          <p>
            {/* {task.specificTime
              ? displayDate(task, 'MMMM Do [at] LT')
              : displayDate(task, 'MMMM Do')} */}
            {/* {task.start === '' && task.end === ''
              ? ''
              : task.start.toDateString() === task.end.toDateString()
              ? '(Due) Date: ' + moment(task.start).format('MMMM Do [at] LT')
              : '(Due) Date: ' +
                moment(task.start).format('MMMM Do [at] LT') +
                ' to ' +
                moment(task.end).format('MMMM Do [at] LT')} */}
          </p>
          <p>{task.notes === '' ? '' : 'Notes: ' + task.notes}</p>
        </div>

        <div className="times">
          {task.estimate === '' ? 'N/A' : task.estimate}
        </div>
        <div className="todo-icons">
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
