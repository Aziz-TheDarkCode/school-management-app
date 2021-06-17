import Header from './layout/header'
import React from "react";
import Homepage from './pages/home'
import SignUppage from './pages/signup'
import Loginpage from './pages/login'
import{BrowserRouter as Router ,Route} from 'react-router-dom'
import Coursepage from './pages/courses';
import Dashboard from './pages/dashboard';
import Fiche from './pages/fiche';
import Signin from './pages/signin';



const App = () =>{
  return (
    <Router>
      <div className="App">
        <Header/>
            <Route path="/homepage" component={Homepage}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/signup" component={SignUppage}/>
            <Route path="/courses" component={Coursepage}/>
            <Route path="/login" component={Loginpage}/>
            <Route path="/fiche" component={Fiche}/>
            <Route path="/signin" component={Signin}/>
      </div>
    </Router>
  );
}

export default App;
