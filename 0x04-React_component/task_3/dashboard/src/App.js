import React from 'react';
import './App.css';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Notifications from './Notifications/Notifications';
import CourseList from './CourseList/CourseList';
import {
  listCourses,
  listNotifications 
} from './utils';
import PropTypes from 'prop-types';

function Body(props) {

  if (props.isLoggedIn) {
    return (
      <div className="CourseBody">
        <CourseList listCourses={listCourses}/>
      </div>
    );
  } else {
    return (
      <Login />
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeypress = this.handleKeypress.bind(this);
  }

  handleKeypress(event) {
    const logout = () => {
      window.alert('Logging you out');
      this.props.logOut();
    };

    if (event.code === 'KeyH' && event.ctrlKey) logout();
    if (event.code === 'KeyZ' && event.ctrlKey) logout();
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeypress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeypress);
  }

  render() {
    const isLoggedIn = (this.props.isLoggedIn) ? this.props.isLoggedIn : false;

    return (
      <React.Fragment>
        <Notifications displayDrawer={true} listNotifications={listNotifications}/>
        <div className="App">
          <Header />
          <Body isLoggedIn={isLoggedIn}/>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  logOut: PropTypes.func
}

App.defaultProps = {
  logOut: () => {}
}

export default App;
