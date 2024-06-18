import './App.css';
import React from 'react';
import Library from './3주차/Library';
import Clock from './4주차/Clock';
import WelcomeOut from './5주차/TestOut';
import CommentList from './5주차/CommentList';
import NotificationList from './6주차/NotificationList';
import Counter from './7주차/Counter';
import Accommodate from './7주차/Accommodate';
import Toggle from './8주차/Toggle';
import MyButton from './8주차/MyButton';
import ConfirmButton from './8주차/ConfirmButton';
import LoginControl from './9주차/LoginControl';
import MainPage from './9주차/Mailbox';
import LandingPage from './9주차/LandingPage';
import AttendanceBook from './10주차/AttendanceBook';



function App() {
  
  return (
    <div className="App">
      <React.StrictMode>
        <AttendanceBook></AttendanceBook>
      </React.StrictMode>
    </div>
  );
}

export default App;
