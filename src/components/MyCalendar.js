import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import './Styles.css'
const localizer = momentLocalizer(moment);

// const myEventsList = Event [{
//   title: 'string',
//   start: "2020-09-14",
//   end: "2020-09-15",
//   allDay: true,
//   resource: "false",
// }]

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
);
export default MyCalendar;
