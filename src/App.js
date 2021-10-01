import './App.css';
import Header from './Components/header_bar.js';
import Routes from './Components/routes.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Component } from 'react';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes />
        </div>
      </Router>
    );
  }
}
export default App;
