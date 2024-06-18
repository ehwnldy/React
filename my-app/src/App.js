import './App.css';
import React from 'react';
import Library from './3주차/Library';
import Clock from './4주차/Clock';
import WelcomeOut from './5주차/TestOut';
import CommentList from './5주차/CommentList';
import NotificationList from './6주차/NotificationList';



function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <NotificationList></NotificationList>
      </React.StrictMode>
    </div>
  );
}

export default App;
