import './Styles.css';
import MyCalendar from './MyCalendar';
import Header from './Header';

const Calendar = () => {
  return (
    <div>
      <Header />
      {/* <p style={{ marginLeft: '7.5vw' }}>Calendar</p> */}
      <div className="header">
        <p className="calendar">Calendar</p>
      </div>
      <MyCalendar />
    </div>
  );
};

export default Calendar;
