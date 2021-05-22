import { useState } from 'react';

const AddTask = () => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [notes, setNotes] = useState('');
  const [displayTask, setDisplayTask] = useState(false);
  const [displayCalendar, setDisplayCalendar] = useState(false);

  return (
    <form className="add-form">
      <div className="add-form-child">
        <div className="form-control">
          <label>Task</label>
          <input type="text" placeholder="add task" />
        </div>
        <div className="form-control">
          <label>Day & Time</label>
          <input type="text" placeholder="add day & time" />
        </div>

        <div className="form-control">
          <label>Notes (if any)</label>
          <textarea
            rows="10"
            cols="30"
            type="text"
            placeholder="add descriptions, notes, details, etc"
          />
        </div>

        <div className="form-control-check">
          <label>Show on Task List</label>
          <input type="checkbox" />
        </div>
        <div className="form-control-check">
          <label>Show on Calendar</label>
          <input type="checkbox" />
        </div>

        <input type="submit" value="Save Task" className="btn btn-block" />
      </div>
    </form>
  );
};

export default AddTask;
