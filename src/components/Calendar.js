import './Styles.css';
import MyCalendar from './MyCalendar';
import Header from './Header';

const Calendar = ({ events }) => {
  events.map((event) => {
    event.start = new Date(event.start);
    event.end = new Date(event.end);
  });

  return (
    <div>
      <Header />
      {/* <p style={{ marginLeft: '7.5vw' }}>Calendar</p> */}
      {/* <div className="header">
        <p className="calendar">Calendar</p>
      </div> */}
      <MyCalendar events={events} />
    </div>
  );
};

export default Calendar;
