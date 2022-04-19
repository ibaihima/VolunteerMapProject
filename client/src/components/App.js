
import React, { useEffect, useState } from "react";
import Header from './Header';
import Home from './Home';
import Login from './Login';
import YourReviews from './YourReviews';
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [page, setPage] = useState("/");
  return (
    <BrowserRouter>
    <Header onChangePage={setPage} className="nav" />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route path="/your_reviews">
        <YourReviews/>
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="*">
        <h1>404 not found</h1>
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;

