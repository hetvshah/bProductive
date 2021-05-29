import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [estimate, setEstimate] = useState('');
  const [notes, setNotes] = useState('');
  const [displayTask, setDisplayTask] = useState(false);
  const [displayCalendar, setDisplayCalendar] = useState(false);
  const [value, onChange] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ text, day, notes, displayTask, displayCalendar });
    setText('');
    setDay('');
    setEstimate('');
    setNotes('');
    setDisplayTask(false);
    setDisplayCalendar(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="add-form-child">
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="add task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Due Day</label>
          <div>
            <DateTimePicker onChange={onChange} value={value} />
          </div>
          {/* <input
            type="text"
            placeholder="add day & time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          /> */}
        </div>

        <div className="form-control">
          <label>Estimated Time</label>
          <input
            type="text"
            placeholder="add estimated time"
            value={estimate}
            onChange={(e) => setEstimate(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>Notes (if any)</label>
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
