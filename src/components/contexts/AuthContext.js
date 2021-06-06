import React, { useContext, useState, useEffect } from 'react';
import firebase, { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// var database = firebase.database();

// function writeUserData(userId, email, ongoingTasks, completedTasks) {
//   firebase.database().ref('users/' + userId).set({
//     email: email,
//     ongoingTasks: ongoingTasks,
//     completedTasks: completedTasks,
//   });
// }

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// class AuthContext extends React.Component {
//   async componentDidMount() {
//     const id = window.location.pathname.substring(6, 13);
//     user = firebase.database().ref('user').child(id);
//     const ongoingTasks = game.child('ongoingTasks');
//     ongoingTasks.on('child_added', (player) => {
//       let updatedPlayers = this.state.players;
//       updatedPlayers.push(player.val());
//       this.setState({
//         players: updatedPlayers,
//       });
//     });
//     const stage = game.child('stage');
//     stage.on('value', (stage) => {
//       this.setState({
//         stage: stage.val(),
//       });
//       if (stage.val() === 0) {
//         // Determine wordset for current round
//         let wordsetTemp = wordsets[Math.floor(Math.random() * wordsets.length)];
//         let wordset = {
//           category: wordsetTemp[0],
//           word: wordsetTemp[1],
//         };
//         game.update({ wordset: wordset });
//         // Determine liar for current round
//         let liar =
//           this.state.players[
//             Math.floor(Math.random() * this.state.players.length)
//           ];
//         game.update({ liar: liar });
//       }
//     });
//   }
// }
