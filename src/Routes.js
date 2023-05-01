import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
const Routes = () => {
  return (
    <Router basename="/my-app">
      <Switch>
      <Route path="/Login" exact component={Login} />
       
      </Switch>
    
    </Router>
  )
}

export default Routes;