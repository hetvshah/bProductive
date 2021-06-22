import './Styles.css';
import MyCalendar from './MyCalendar';
import Header from './Header';

const Calendar = ({ events }) => {
  const transform = (event) => {
    if (event.start !== '') {
      event.start = new Date(event.start)
      event.end = new Date(event.end)
    } 
  }

  events.map((event) => {
    transform(event)
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
