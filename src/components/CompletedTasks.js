import { ImUndo } from 'react-icons/im';
import { BsFillTrashFill } from 'react-icons/bs';

const CompletedTasks = ({ completedTasks, onMove, onDelete }) => {
  const listCompletedTasks = completedTasks.map((task) => (
    <div className="todo todo-complete">
      <div>
        <h3>{task.title}</h3>
        <p> {task.day === '' ? '' : 'Due Date: ' + task.day}</p>
        <p>{task.notes === '' ? '' : 'Notes: ' + task.notes}</p>
      </div>

      <div className="times">{task.estimate}</div>
      <div className="todo-icons">
        <ImUndo className="im-undo" onClick={() => onMove(task)} />
        <BsFillTrashFill
          className="im-undo trash"
          onClick={() => onDelete(task)}
        />
      </div>
    </div>
  ));

  return <>{listCompletedTasks}</>;
};

export default CompletedTasks;
