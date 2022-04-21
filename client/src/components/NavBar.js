import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Link } from "react-router-dom";

function NavBar({user,setUser}){
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
      
    return(
        <header className="nav">
        <div className="homeLogoBox">
         <img className="homeLogo" src= "./assets/home-logo.png" alt="Volunteer logo"/>
        </div>
        <div>
            <Link to="your_reviews">Your Reviews</Link>
        </div>
        <div>
          {user ? (
            <button onClick={handleLogoutClick}>Logout</button>
          ) : (
            <>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </header>
    // <div className="header">
    //         <img className="homeLogo" src= "./assets/home-logo.png" alt="Volunteer logo"/>
    //     <div className= "headerRight"> 
    //         <button className="reviewList"> Review List </button>        
    //         <button className="login"> Login</button>
    //     </div>
    // </div>
    // <>
    // <Navbar bg="light" variant="light" fixed="top">
    //     <Container>
    //         <Navbar.Brand className="me-5"><img 
    //             src="./assets/home-logo.png" 
    //             width="100%" 
    //             height="60"
    //             alt="logo"
    //             ></img></Navbar.Brand>
    //         <Nav className="me-auto">
    //             <Nav.Link href="home">Home</Nav.Link>
    //             <Nav.Link href="your_reviews">Your Reviews</Nav.Link>
    //         </Nav>
    //         <Nav>
    //             <Nav.Link href="login">Login</Nav.Link>
    //         </Nav>
    //     </Container>
    // </Navbar>
    // </>
    );
}


export default NavBar;