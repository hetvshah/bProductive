import { ImUndo } from 'react-icons/im';
import { BsFillTrashFill } from 'react-icons/bs';
import moment from 'moment';

const CompletedTasks = ({ completedTasks, onMove, onDelete }) => {
  const listCompletedTasks = completedTasks.map((task) => (
    <div className="todo todo-complete">
      <div>
        <h3 style={{ fontSize: '1.2vw' }}>{task.title}</h3>
        <div style={{ lineHeight: '1.6', fontSize: '.95vw' }}>
          <div>
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
          </div>
          <div
            style={{
              paddingRight: '3vw',
              paddingBottom: '1vw',
              fontSize: '.95vw',
            }}
          >
            {task.notes === '' ? '' : 'Notes: ' + task.notes}
          </div>
        </div>
      </div>

      <div className="times">
        {task.estimateHours === 0 && task.estimateMin !== 0
          ? task.estimateMin + 'm / '
          : task.estimateHours !== 0 && task.estimateMin === 0
          ? task.estimateHours + 'h / '
          : task.estimateHours === 0 && task.estimateMin === 0
          ? '- / '
          : task.estimateHours + 'h ' + task.estimateMin + 'm / '}
        {task.timeSpent === 0
          ? '-'
          : Math.round(task.timeSpent) % 60 === 0
          ? Math.floor(Math.round(task.timeSpent) / 60) + 'h'
          : task.timeSpent >= 60
          ? Math.floor(Math.round(task.timeSpent) / 60) +
            'h ' +
            (Math.round(task.timeSpent) % 60) +
            'm'
          : (Math.round(task.timeSpent) % 60) + 'm'}
      </div>
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
