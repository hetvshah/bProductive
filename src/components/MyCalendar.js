import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import './Styles.css';
const localizer = momentLocalizer(moment);

const MyCalendar = ({ events }) => {
  const filteredEvents = events.filter((event) => event.displayCalendar);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={filteredEvents}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};
export default MyCalendar;
