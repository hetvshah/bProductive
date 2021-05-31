import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [allDay, setAllDay] = useState(false);
  const [day, setDay] = useState(new Date());
  const [estimate, setEstimate] = useState('');
  const [notes, setNotes] = useState('');
  const [displayTask, setDisplayTask] = useState(false);
  const [displayCalendar, setDisplayCalendar] = useState(false);
  // const [value, onChange] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      allDay,
      day,
      estimate,
      notes,
      displayTask,
      displayCalendar,
    });
    onAdd({
      title,
      allDay,
      day,
      estimate,
      notes,
      displayTask,
      displayCalendar,
    });
    setTitle('');
    setAllDay(false);
    setDay(new Date());
    setEstimate('');
    setNotes('');
    setDisplayTask(false);
    setDisplayCalendar(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="add-form-child">
        <div className="form-control task">
          <label style={{ marginBottom: '1vw' }}>Task</label>
          <input
            type="text"
            placeholder="add task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control-check">
          <label>All Day</label>
          <input
            type="checkbox"
            value={displayCalendar}
            checked={displayCalendar}
            onChange={(e) => setDisplayCalendar(e.currentTarget.checked)}
          />
        </div>
        <div className="form-control">
          <label style={{ marginBottom: '1vw' }}>Start Time & Day</label>
          <div>
            <DateTimePicker
              style={{ marginTop: '200px' }}
              onChange={setDay}
              value={day}
              // onChange={(e) => setDay(e.target.value)}
            />
          </div>
        </div>
        <div className="form-control">
          <label style={{ marginBottom: '1vw' }}>End Time & Day</label>
          <div>
            <DateTimePicker
              style={{ marginTop: '200px' }}
              onChange={setDay}
              value={day}
              // onChange={(e) => setDay(e.target.value)}
            />
          </div>
        </div>
        <div className="form-control">
          <label style={{ marginBottom: '1vw' }}>Estimated Time</label>
          <input
            type="text"
            placeholder="add estimated time"
            value={estimate}
            onChange={(e) => setEstimate(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label style={{ marginBottom: '1vw' }}>Notes (if any)</label>
          <textarea
            rows="10"
            cols="30"
            type="text"
            placeholder="add descriptions, notes, details, etc"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div className="form-control-check">
          <label>Show on Task List</label>
          <input
            type="checkbox"
            value={displayTask}
            checked={displayTask}
            onChange={(e) => setDisplayTask(e.currentTarget.checked)}
          />
        </div>
        <div className="form-control-check">
          <label>Show on Calendar</label>
          <input
            type="checkbox"
            value={displayCalendar}
            checked={displayCalendar}
            onChange={(e) => setDisplayCalendar(e.currentTarget.checked)}
          />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </div>
    </form>
  );
};

export default AddTask;
