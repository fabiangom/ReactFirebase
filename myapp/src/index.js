import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
  apiKey: "AIzaSyCWbtOc5JQOvHR9w9kl-7czmpdqtJunCQo",
  authDomain: "myapp-342db.firebaseapp.com",
  databaseURL: "https://myapp-342db.firebaseio.com",
  projectId: "myapp-342db",
  storageBucket: "myapp-342db.appspot.com",
  messagingSenderId: "545651873459"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
