import Header from './layout/header'
import React from "react";
import Homepage from './pages/home'
import SignUppage from './pages/signup'
import Loginpage from './pages/login'
import{BrowserRouter as Router ,Route,Switch,  Link} from 'react-router-dom'
import Coursepage from './pages/courses';



const App = () =>{
  return (
    <Router>
      <div className="App">
        <Header/>
            <Route path="/homepage" component={Homepage}/>
            <Route path="/signup" component={SignUppage}/>
            <Route path="/courses" component={Coursepage  }/>
            <Route path="/login" component={Loginpage}/>
      </div>
    </Router>
  );
}

export default App;
