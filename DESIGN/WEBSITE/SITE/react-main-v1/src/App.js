import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Projects from './pages/Projects';
import Todo from './pages/Todo';
import Login from './pages/Login';


function App() {
  return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/todo' exact component={Todo}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/calendar' component={Calendar}/>
            <Route path='/login' component={Login}/>

          </Switch>
        </Router>
      </>
  );
}

export default App;
