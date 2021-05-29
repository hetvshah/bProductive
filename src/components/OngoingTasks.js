import { GrCheckmark } from 'react-icons/gr';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import './Styles.css';

const OngoingTasks = ({ ongoingTasks, onMove, onDelete }) => {
  const filteredTasks = ongoingTasks.filter((task) => task.displayTask);

  if (filteredTasks.length > 0) {
    const listOngoingTasks = filteredTasks.map((task) => (
      <div className="todo">
        <div>
          <h3>{task.title}</h3>
          <p>{task.day === '' ? '' : 'Due Date: ' + task.day}</p>
          <p>{task.notes === '' ? '' : 'Notes: ' + task.notes}</p>
        </div>

        <div className="times">{task.estimate}</div>
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
