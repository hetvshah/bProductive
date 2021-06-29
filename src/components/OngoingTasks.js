import { GrCheckmark } from 'react-icons/gr';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsFillTrashFill, BsPlayFill } from 'react-icons/bs';
import { IoMdPause } from 'react-icons/io';
import './Styles.css';
import moment from 'moment';
import { useState } from 'react';

const OngoingTasks = ({
  ongoingTasks,
  onMove,
  onDelete,
  onPause,
  setCurrentTask,
  setDisplay,
  setEdit,
}) => {
  var end;
  const [start, setStart] = useState();
  const filteredTasks = ongoingTasks.filter((task) => task.displayTask);

  if (filteredTasks.length > 0) {
    const listOngoingTasks = filteredTasks.map((task) => (
      <div className="todo">
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
                ? '(Due) Date: ' +
                  moment(new Date(task.start)).format('MMMM Do')
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
          <BsPlayFill
            className="ongoing-task"
            onClick={() => {
              setCurrentTask(task);
              setDisplay(true);
              console.log('started working on ' + task.title);
              setStart(new Date());
            }}
          />
          <IoMdPause
            className="ongoing-task"
            onClick={() => {
              console.log(start);
              console.log('stopped working on ' + task.title);
              end = new Date();
              console.log(start);
              onPause(task, (end - start) / 60000);
            }}
          />

          <GrCheckmark className="ongoing-task" onClick={() => onMove(task)} />
          <AiOutlineEdit
            className="ongoing-task"
            onClick={() => {
              setEdit(true);
              setCurrentTask(task);
            }}
          />
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
