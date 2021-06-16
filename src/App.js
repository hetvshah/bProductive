// import 'bootstrap/dist/css//bootstrap.min.css';
import Home from './components/Home';
import Tracker from './components/Tracker';
import Calendar from './components/Calendar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './components/contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import './components/Styles.css';
import './index.css';
import ForgotPassword from './components/auth/ForgotPassword';
import UpdateProfile from './components/auth/UpdateProfile';
import firebase from './components/firebase';
import { db } from './components/firebase';
import { useAuth } from './components/contexts/AuthContext';

import React from 'react';

class App extends React.Component {
  state = {
    ongoingTasks: [],
    completedTasks: [],
    showAddTask: false,
  };

  // const changeState(props) {
  //   this.setState({
  //     showAddTask: props,
  //   });
  // }

  changeState = (props) => {
    this.setState({
      showAddTask: props,
    });
  };

  // const [showAddTask, setAddTask] = useState(false);

  // const [ongoingTasks, setOngoingTasks] = useState([
  //   {
  //     title: 'Finish part 7 of CIS 121 programming. ',
  //     specificTime: true,
  //     start: new Date(2021, 5, 12, 20, 9, 30, 0),
  //     end: new Date(2021, 5, 15, 20, 9, 45, 0),
  //     estimate: '15m',
  //     notes: 'Make sure to pay attention to runtimes. ',
  //     displayTask: true,
  //     displayCalendar: true,
  //   },
  //   {
  //     title: 'Respond to emails.',
  //     specificTime: false,
  //     start: new Date(2015, 5, 21, 20, 0, 0, 0),
  //     end: new Date(2015, 5, 25, 20, 0, 0, 0),
  //     estimate: '2m',
  //     notes: 'Specifically John Doe and research mentor.',
  //     displayTask: true,
  //     displayCalendar: false,
  //   },
  //   {
  //     title: 'Search for apartments.',
  //     specificTime: true,
  //     start: new Date(2021, 5, 21, 20, 0, 0, 0),
  //     end: new Date(2021, 5, 21, 20, 0, 0, 0),
  //     estimate: '3hr',
  //     notes: '',
  //     displayTask: true,
  //     displayCalendar: true,
  //   },
  // ]);

  // const [completedTasks, setCompletedTasks] = useState([
  //   {
  //     title: 'Call mom. ',
  //     specificTime: true,
  //     start: new Date(2015, 5, 21, 20, 10, 0, 0),
  //     end: new Date(2015, 5, 21, 20, 10, 0, 0),
  //     estimate: '1hr',
  //     notes: 'Ask about trip to NYC.',
  //     displayTask: true,
  //     displayCalendar: true,
  //   },
  //   {
  //     title: 'Call dad. ',
  //     specificTime: true,
  //     start: new Date(2015, 5, 21, 20, 11, 0, 0),
  //     end: new Date(2015, 5, 21, 20, 11, 0, 0),
  //     estimate: '2hr',
  //     notes: 'Buy textbooks.',
  //     displayTask: true,
  //     displayCalendar: true,
  //   },
  // ]);

  componentDidMount() {
    const previousOngoingTasks = this.state.ongoingTasks;
    const previousCompletedTasks = this.state.completedTasks;
    db.ref('users/4mpCA8Nrd6b5BudHf6SMyS2Ue093/ongoingTasks').on(
      'child_added',
      (snap) => {
        previousOngoingTasks.push({
          id: snap.key,
          title: snap.val().title,
          specificTime: snap.val().specificTime,
          start: snap.val().start,
          end: snap.val().end,
          estimate: snap.val().estimate,
          notes: snap.val().notes,
          displayTask: snap.val().displayTask,
          displayCalendar: snap.val().displayCalendar,
        });
        this.setState({
          ongoingTasks: previousOngoingTasks,
        });
      }
    );

    db.ref('users/4mpCA8Nrd6b5BudHf6SMyS2Ue093/completedTasks').on(
      'child_added',
      (snap) => {
        previousCompletedTasks.push({
          id: snap.key,
          title: snap.val().title,
          specificTime: snap.val().specificTime,
          start: snap.val().start,
          end: snap.val().end,
          estimate: snap.val().estimate,
          notes: snap.val().notes,
          displayTask: snap.val().displayTask,
          displayCalendar: snap.val().displayCalendar,
        });
        this.setState({
          completedTasks: previousCompletedTasks,
        });
      }
    );

    db.ref('users/4mpCA8Nrd6b5BudHf6SMyS2Ue093/ongoingTasks').on(
      'child_removed',
      (snap) => {
        for (var i = 0; i < previousOngoingTasks.length; i++) {
          if (previousOngoingTasks[i].id === snap.key) {
            previousOngoingTasks.splice(i, 1);
          }
        }
        this.setState({
          ongoingTasks: previousOngoingTasks,
        });
      }
    );

    db.ref('users/4mpCA8Nrd6b5BudHf6SMyS2Ue093/completedTasks').on(
      'child_removed',
      (snap) => {
        for (var i = 0; i < previousCompletedTasks.length; i++) {
          if (previousCompletedTasks[i].id === snap.key) {
            previousCompletedTasks.splice(i, 1);
          }
        }
        this.setState({
          completedTasks: previousCompletedTasks,
        });
      }
    );
  }

  render() {
    return (
      <Router>
        <AuthProvider>
          {/* update profile page */}
          <PrivateRoute path="/update-profile">
            <div style={{ backgroundColor: '#f3efff' }}>
              <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: '90vh' }}
              >
                <div className="w-100" style={{ maxWidth: '450px' }}>
                  <UpdateProfile />
                </div>
              </Container>
            </div>
          </PrivateRoute>

          {/* home page */}
          <PrivateRoute
            exact
            path="/"
            component={() => (
              <Home
                ongoingTasks={this.state.ongoingTasks}
                // setOngoingTasks={setOngoingTasks}
                completedTasks={this.state.completedTasks}
                // setCompletedTasks={setCompletedTasks}
                showAddTask={this.state.showAddTask}
                // setAddTask={setAddTask}
                changeState={this.changeState}
              />
            )}
          />
          {/* tracker page */}
          <Route exact path="/tracker" render={(props) => <Tracker />} />
          {/* calendar page */}
          <Route
            exact
            path="/calendar"
            render={(props) => <Calendar events={this.state.ongoingTasks} />}
          />

          {/* login page */}
          <Route path="/login">
            <div style={{ backgroundColor: '#f3efff' }}>
              <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: '90vh' }}
              >
                <div className="w-100" style={{ maxWidth: '450px' }}>
                  <Login />
                </div>
              </Container>
            </div>
          </Route>
          {/* signup page */}
          <Route path="/signup">
            <div style={{ backgroundColor: '#f3efff' }}>
              <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: '90vh' }}
              >
                <div className="w-100" style={{ maxWidth: '450px' }}>
                  <Signup />
                </div>
              </Container>
            </div>
          </Route>
          {/* forgot password page */}
          <Route path="/forgot-password">
            <div style={{ backgroundColor: '#f3efff' }}>
              <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: '90vh' }}
              >
                <div className="w-100" style={{ maxWidth: '450px' }}>
                  <ForgotPassword />
                </div>
              </Container>
            </div>
          </Route>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
