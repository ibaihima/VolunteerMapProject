
import React, { useEffect, useState } from "react";
import NavBar from './NavBar';
import Home from './Home';
import Login from "./UserHandling/Login"; 
import YourReviews from './YourReviews';
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [page, setPage] = useState("/");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(()=>{
    fetch('/me')
    .then(r => {
      if(r.ok){
        r.json().then(user => setCurrentUser(user))
      }
    })
  },[])

  if(!currentUser) return <Login onLogin={setCurrentUser}/>

  return (
    <BrowserRouter>
    <NavBar user={currentUser} setUser={setCurrentUser} />
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
      <Route path="*">
        <h1>404 not found</h1>
      </Route>
    </Switch>
  </BrowserRouter>
    // <>
    //   <NavBar user={currentUser} setUser={setCurrentUser}/>
    //   <main>
    //     <Switch>
    //       <Route path="/home">
    //         <Home/>
    //       </Route>
    //       <Route path="your_reviews">
    //         <YourReviews/>
    //       </Route>
    //     </Switch>
    //   </main>
    // </>
  );
}

export default App;

