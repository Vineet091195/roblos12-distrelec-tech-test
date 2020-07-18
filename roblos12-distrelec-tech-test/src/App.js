import React from "react";
import { Route, Switch } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <div className="mainContainer">
    <h1>DISTRELEC</h1>
    <NavBar/>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/user" component={UsersPage} />
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}

export default App;
