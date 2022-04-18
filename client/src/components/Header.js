
function Header(){
    return(
    <div className="header">
            <img className="homeLogo" src= "./assets/home-logo.png" alt="Volunteer logo"/>
        <div className= "headerRight"> 
            <button className="reviewList"> Review List </button>        
            <button className="login"> Login</button>
        </div>
    </div>
    )
}


export default Header;