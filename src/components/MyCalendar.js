import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import './Styles.css';
const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    title: 'Lunch',
    allDay: true,
    start: new Date(2021, 5, 12, 12, 0, 0, 0),
    end: new Date(2021, 5, 12, 13, 0, 0, 0),
    notes: 'Power lunch',
  },
];

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
);
export default MyCalendar;
