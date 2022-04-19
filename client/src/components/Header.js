import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return(
    // <div className="header">
    //         <img className="homeLogo" src= "./assets/home-logo.png" alt="Volunteer logo"/>
    //     <div className= "headerRight"> 
    //         <button className="reviewList"> Review List </button>        
    //         <button className="login"> Login</button>
    //     </div>
    // </div>
    <>
    <Navbar bg="light" variant="light" fixed="top">
        <Container>
            <Navbar.Brand className="me-5"><img 
                src="./assets/home-logo.png" 
                width="100%" 
                height="60"
                alt="logo"
                ></img></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="your_reviews">Your Reviews</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="login">Login</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </>
    )
}


export default Header;