import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavIndex from './components/Navbar/NavIndex'
import HomeScreen from './views/HomeScreen';
import LoginTest from './views/LoginTest';
import Register from './views/Register';

function App() {
  return (
    <Router>
           <NavIndex></NavIndex>   
           <Switch>
              <Route path="/" exact component={HomeScreen}/>
              <Route path="/home" exact component={HomeScreen}/>
              <Route path="/login" exact component={LoginTest}/>
              <Route path="/signup" exact component={Register}/>
             </Switch>        
        </Router>
  );
}

export default App;
