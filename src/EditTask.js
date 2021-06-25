import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import DatePicker from 'react-date-picker';

const EditTask = () => {
  const [title, setTitle] = useState('');
  const [specificDay, setSpecificDay] = useState(false);
  const [specificTime, setSpecificTime] = useState(false);
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [estimateHours, setEstimateHours] = useState(0);
  const [estimateMin, setEstimateMin] = useState(0);
  const [notes, setNotes] = useState('');
  const [displayTask, setDisplayTask] = useState(true);
  const [displayCalendar, setDisplayCalendar] = useState(true);
  const [timeSpent] = useState(0);
  // const [value, onChange] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(start);
    if (!specificDay) {
      console.log('CHECK');
      setSpecificTime(false);
      setDisplayCalendar(false);
    }

    // onAdd(
    //   {
    //     title,
    //     specificTime,
    //     start,
    //     end,
    //     estimateHours,
    //     estimateMin,
    //     notes,
    //     displayTask,
    //     displayCalendar,
    //     timeSpent,
    //   },
    //   specificDay
    // );

    setTitle('');
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
                <DatePicker
                  onChange={setEnd}
                  value={end}
                  // onChange={(e) => setDay(e.target.value)}
                />
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
        <input type="submit" value="Save Task" className="home-btn btn-block" />
      </div>
    </form>
  );
};

export default EditTask;
