import React from 'react';
import './App.css';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Notifications from './Notifications';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = () => {
      console.log('logOut called');
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    const alert = () => {
      window.alert('Logging you out')
      this.logOut();
    };

    if (event.code === 'KeyH' && event.ctrlKey) alert();
    if (event.code === 'KeyZ' && event.ctrlKey) alert();
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress);
  }

  render() {
    return (
      <React.Fragment>
        <Notifications />
        <div className="App">
          <Header />
          <Login />
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
