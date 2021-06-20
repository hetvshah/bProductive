import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import DatePicker from 'react-date-picker';

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [specificTime, setSpecificTime] = useState(false);
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [estimate, setEstimate] = useState('');
  const [notes, setNotes] = useState('');
  const [displayTask, setDisplayTask] = useState(true);
  const [displayCalendar, setDisplayCalendar] = useState(true);
  // const [value, onChange] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(start);
    onAdd({
      title,
      specificTime,
      start,
      end,
      estimate,
      notes,
      displayTask,
      displayCalendar,
    });
    setTitle('');
    setSpecificTime(false);
    setStart(new Date());
    setEnd(new Date());
    setEstimate('');
    setNotes('');
    setDisplayTask(true);
    setDisplayCalendar(true);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="add-form-child">
        <div className="form-control-task">
          <label style={{ marginBottom: '1vw' }}>Task</label>
          <input
            type="text"
            placeholder="add task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control-check">
          <label>Specific Time</label>
          <input
            type="checkbox"
            value={specificTime}
            checked={specificTime}
            onChange={(e) => setSpecificTime(e.currentTarget.checked)}
          />
        </div>

        {specificTime ? (
          <div>
            <div className="datetime-picker">
              <label style={{ marginBottom: '1vw' }}>Start Time & Day</label>
              <div>
                <DateTimePicker
                  onChange={setStart}
                  value={start}
                  // onChange={(e) => setDay(e.target.value)}
                />
              </div>
            </div>
            <div className="datetime-picker">
              <label style={{ marginBottom: '1vw' }}>End Time & Day</label>
              <div>
                <DateTimePicker
                  onChange={setEnd}
                  value={end}
                  // onChange={(e) => setDay(e.target.value)}
                />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="datetime-picker">
              <label style={{ marginBottom: '1vw' }}>Start Day</label>
              <div>
                <DatePicker
                  onChange={setStart}
                  value={start}
                  // onChange={(e) => setDay(e.target.value)}
                />
              </div>
            </div>
            <div className="datetime-picker">
              <label style={{ marginBottom: '1vw' }}>End Day</label>
              <div>
                <DatePicker
                  onChange={setEnd}
                  value={end}
                  // onChange={(e) => setDay(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        <div className="form-control-task">
          <label style={{ marginBottom: '1vw' }}>Estimated Time</label>
          <input
            type="text"
            placeholder="add estimated time"
            value={estimate}
            onChange={(e) => setEstimate(e.target.value)}
          />
        </div>
        <div className="form-control-task">
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
        <input type="submit" value="Save Task" className="home-btn btn-block" />
      </div>
    </form>
  );
};

export default AddTask;
