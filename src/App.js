import Header from './layout/header'
import React from "react";
import Homepage from './pages/home'
import SignUppage from './pages/signup'
import Loginpage from './pages/login'
import{BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Coursepage from './pages/courses';
import Dashboard from './pages/dashboard';
import Fiche from './pages/fiche';
import Signin from './pages/signin';



const App = () =>{
  return (
    <div className="App">
        <Router>
            <Header/>
            <Switch>
              <Route path="/dashboard">
                  <Dashboard/>
              </Route>
          
                  <Route path="/signup">
                    <SignUppage/>
                  </Route>
                  <Route path="/courses">
                      <Coursepage/>
                  </Route>
                  <Route path="/fiche">
                      <Fiche/>
                  </Route>
                  <Route path="/login">
                      <Loginpage/>
                  </Route>
                  <Route path="/signin">
                      <Signin/>
                  </Route>
                  <Route path="/">
                      <Homepage/>
                  </Route>
            </Switch>
        </Router>
      </div>

  );
}

export default App;
