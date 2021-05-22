import Home from './components/Home';
import Tracker from './components/Tracker';
import Calendar from './components/Calendar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" render={(props) => <Home />} />
      <Route exact path="/tracker" render={(props) => <Tracker />} />
      <Route exact path="/calendar" render={(props) => <Calendar />} />
    </Router>
  );
}

export default App;
