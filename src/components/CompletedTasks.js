import { ImUndo } from 'react-icons/im';
import { BsFillTrashFill } from 'react-icons/bs';
import moment from 'moment';

const CompletedTasks = ({ completedTasks, onMove, onDelete }) => {
  const listCompletedTasks = completedTasks.map((task) => (
    <div className="todo todo-complete">
      <div>
        <h3>{task.title}</h3>
        {/* <p>
          {task.start === '' && task.end === ''
            ? ''
            : task.start.toDateString() === task.end.toDateString()
            ? '(Due) Date : ' + moment(task.start).format('MMMM Do [at] LT')
            : '(Due) Date: ' +
              moment(task.start).format('MMMM Do [at] LT') +
              ' to ' +
              moment(task.end).format('MMMM Do [at] LT')}
        </p> */}
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
