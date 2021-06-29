// import 'bootstrap/dist/css//bootstrap.min.css';
import Home from './components/Home';
import Calendar from './components/Calendar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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

import React from 'react';

class App extends React.Component {
  state = {
    ongoingTasks: [],
    completedTasks: [],
    showAddTask: false,
  };

  changeState = (props) => {
    this.setState({
      showAddTask: props,
    });
  };

  resetState = () => {
    this.setState({
      ongoingTasks: [],
      completedTasks: [],
    });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        console.log(uid);

        const previousOngoingTasks = this.state.ongoingTasks;
        const previousCompletedTasks = this.state.completedTasks;
        db.ref('users/' + uid + '/ongoingTasks').on('child_added', (snap) => {
          previousOngoingTasks.push({
            id: snap.key,
            title: snap.val().title,
            specificDay: snap.val().specificDay,
            specificTime: snap.val().specificTime,
            start: snap.val().start,
            end: snap.val().end,
            estimateHours: snap.val().estimateHours,
            estimateMin: snap.val().estimateMin,
            notes: snap.val().notes,
            displayTask: snap.val().displayTask,
            displayCalendar: snap.val().displayCalendar,
            timeSpent: snap.val().timeSpent,
          });
          this.setState({
            ongoingTasks: previousOngoingTasks,
          });
        });

        db.ref('users/' + uid + '/completedTasks').on('child_added', (snap) => {
          previousCompletedTasks.push({
            id: snap.key,
            title: snap.val().title,
            specificDay: snap.val().specificDay,
            specificTime: snap.val().specificTime,
            start: snap.val().start,
            end: snap.val().end,
            estimateHours: snap.val().estimateHours,
            estimateMin: snap.val().estimateMin,
            notes: snap.val().notes,
            displayTask: snap.val().displayTask,
            displayCalendar: snap.val().displayCalendar,
            timeSpent: snap.val().timeSpent,
          });
          this.setState({
            completedTasks: previousCompletedTasks,
          });
        });

        db.ref('users/' + uid + '/ongoingTasks').on('child_removed', (snap) => {
          for (var i = 0; i < previousOngoingTasks.length; i++) {
            if (previousOngoingTasks[i].id === snap.key) {
              previousOngoingTasks.splice(i, 1);
            }
          }
          this.setState({
            ongoingTasks: previousOngoingTasks,
          });
        });

        db.ref('users/' + uid + '/completedTasks').on(
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

      db.ref('users/' + uid + '/ongoingTasks').on('value', (snapshot) => {
        if (snapshot.exists()) {
          var newArr = [];

          snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            item.id = childSnapshot.key;

            newArr.push(item);
          });

          this.setState({
            ongoingTasks: newArr,
          });
        }
      });
    });
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
                completedTasks={this.state.completedTasks}
                showAddTask={this.state.showAddTask}
                changeState={this.changeState}
              />
            )}
          />
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
                  <Login resetState={this.resetState} />
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
                  <Signup resetState={this.resetState} />
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
