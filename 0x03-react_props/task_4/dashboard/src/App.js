import React from 'react';
import './App.css';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Notifications from './Notifications/Notifications';
import CourseList from './CourseList/CourseList';

function Body(props) {
  if (props.isLoggedIn) {
    return (
      <div className="CourseBody">
        <CourseList />
      </div>
    );
  } else {
    return (
      <Login />
    );
  }
}

function App(props) {
  const isLoggedIn = (props.isLoggedIn) ? props.isLoggedIn : false;

  return (
    <React.Fragment>
      <Notifications displayDrawer={true} />
      <div className="App">
        <Header />
        <Body isLoggedIn={isLoggedIn}/>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
