import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import firebase from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function writeUserData(userId, name, ongoingTasks, completedTasks) {
  firebase
    .database()
    .ref('users/' + userId)
    .set({
      ongoingTasks: ongoingTasks,
      completedTasks: completedTasks,
    });
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [displayName, setDisplayName] = useState('');

  function signup(name, email, password) {
    setDisplayName(name);
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.then(function (user) {
      user.user.updateProfile({
        displayName: name,
      });

      writeUserData(user.user.uid, name, [], []);
    });

    return promise;
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

  function updateName(name) {
    return currentUser.updateProfile({
      displayName: name,
    });
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
    updateName,
    displayName,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
