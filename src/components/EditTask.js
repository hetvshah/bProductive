import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import DatePicker from 'react-date-picker';
import { Link } from 'react-router-dom';

const EditTask = ({ setEdit, currentTask, onUpdate }) => {
  const [title, setTitle] = useState(currentTask.title);
  const [specificDay, setSpecificDay] = useState(currentTask.specificDay);
  const [specificTime, setSpecificTime] = useState(currentTask.specificTime);
  const [start, setStart] = useState(currentTask.start);
  const [end, setEnd] = useState(currentTask.end);
  const [estimateHours, setEstimateHours] = useState(currentTask.estimateHours);
  const [estimateMin, setEstimateMin] = useState(currentTask.estimateMin);
  const [notes, setNotes] = useState(currentTask.notes);
  const [displayTask, setDisplayTask] = useState(currentTask.displayTask);
  const [displayCalendar, setDisplayCalendar] = useState(
    currentTask.displayCalendar
  );
  const [timeSpent, setTimeSpent] = useState(currentTask.timeSpent);
  const [totalWorkedHours, setTotalWorkedHours] = useState(
    Math.floor(timeSpent / 60)
  );
  const [totalWorkedMin, setTotalWorkedMin] = useState(
    Math.round(timeSpent % 60)
  );

  const onSubmit = (e) => {
    e.preventDefault();

    if (!specificDay) {
      console.log('CHECK');
      setSpecificTime(false);
      setDisplayCalendar(false);
    }

    onUpdate(
      {
        title,
        specificDay,
        specificTime,
        start,
        end,
        estimateHours,
        estimateMin,
        notes,
        displayTask,
        displayCalendar,
        timeSpent,
      },
      currentTask.id
    );

    setEdit(false);

    setTitle('');
    setSpecificDay(false);
    setSpecificTime(false);
    setStart(new Date());
    setEnd(new Date());
    setEstimateHours(0);
    setEstimateMin(0);
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
          <label>Specific Day</label>
          <input
            type="checkbox"
            value={specificDay}
            checked={specificDay}
            onChange={(e) => setSpecificDay(e.currentTarget.checked)}
          />
        </div>

        {specificDay ? (
          <div className="form-control-check">
            <label>Specific Time</label>
            <input
              type="checkbox"
              value={specificTime}
              checked={specificTime}
              onChange={(e) => setSpecificTime(e.currentTarget.checked)}
            />
          </div>
        ) : (
          ''
        )}

        {specificDay && specificTime ? (
          <div>
            <div className="datetime-picker">
              <label style={{ marginBottom: '1vw' }}>Start Time & Day</label>
              <div>
                <DateTimePicker onChange={setStart} value={start} />
              </div>
            </div>
            <div className="datetime-picker">
              <label style={{ marginBottom: '1vw' }}>End Time & Day</label>
              <div>
                <DateTimePicker onChange={setEnd} value={end} />
              </div>
            </div>
          </div>
        ) : specificDay && !specificTime ? (
          <div>
            <div className="datetime-picker">
              <label style={{ marginBottom: '1vw' }}>Start Day</label>
              <div>
                <DatePicker onChange={setStart} value={start} />
              </div>
            </div>
            <div className="datetime-picker">
              <label style={{ marginBottom: '1vw' }}>End Day</label>
              <div>
                <DatePicker onChange={setEnd} value={end} />
              </div>
            </div>
          </div>
        ) : !specificDay && !specificTime ? (
          ''
        ) : !specificDay && specificTime ? (
          ''
        ) : (
          ''
        )}

        <div className="form-control-task">
          <label style={{ marginBottom: '1vw' }}>Estimated Time</label>
          <div className="estimate">
            <input
              className="estimated-time-inpt"
              type="number"
              placeholder="add estimated time"
              value={estimateHours}
              onChange={(e) => setEstimateHours(e.target.value)}
            />
            <label className="estimated-time-lbl">hours</label>
            <input
              className="estimated-time-inpt"
              type="number"
              placeholder="add estimated time"
              value={estimateMin}
              onChange={(e) => setEstimateMin(e.target.value)}
            />
            <label className="estimated-time-lbl">minutes</label>
          </div>

          <label style={{ marginBottom: '1vw', marginTop: '1vw' }}>
            Time Spent
          </label>
          <div className="estimate">
            <input
              className="estimated-time-inpt"
              type="number"
              placeholder="add estimated time"
              value={totalWorkedHours}
              onChange={(e) => {
                console.log(e.target.value);
                setTotalWorkedHours(parseFloat(e.target.value));
                setTimeSpent(parseFloat(e.target.value) * 60 + totalWorkedMin);
              }}
            />
            <label className="estimated-time-lbl">hours</label>
            <input
              className="estimated-time-inpt"
              type="number"
              placeholder="add estimated time"
              value={totalWorkedMin}
              onChange={(e) => {
                setTotalWorkedMin(parseFloat(e.target.value));
                setTimeSpent(
                  totalWorkedHours * 60 + parseFloat(e.target.value)
                );
              }}
            />
            <label className="estimated-time-lbl">minutes</label>
          </div>
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
        {specificDay ? (
          <div className="form-control-check">
            <label>Show on Calendar</label>
            <input
              type="checkbox"
              value={displayCalendar}
              checked={displayCalendar}
              onChange={(e) => setDisplayCalendar(e.currentTarget.checked)}
            />
          </div>
        ) : (
          ''
        )}
        <input
          type="submit"
          value="Update Task"
          className="home-btn btn-block"
        />
        <div className="w-100 text-center mt-2" style={{ paddingTop: '.5vw' }}>
          <Link onClick={() => setEdit(false)}>Cancel</Link>
        </div>
      </div>
    </form>
  );
};

export default EditTask;
