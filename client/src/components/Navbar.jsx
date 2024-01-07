import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
       <div className="navbar">
        <div className="container">
            <div className="logo"><h1>NatDev</h1></div>
            <div className="links">
                <Link className="link" to="/?cat=art">
                    <h6>ART</h6>
                </Link>
                <Link className="link" to="/?cat=science">
                    <h6>SCIENCE</h6>
                </Link>
                <Link className="link" to="/?cat=Technology">
                    <h6>TECHNOLOGY</h6>
                </Link>
                <Link className="link" to="/?cat=design">
                    <h6>DESIGN</h6>
                </Link>
                <span>Nat</span>
                <span>Logout
                    
                </span>
                <span className='write'>
                    <Link to="/write">Write</Link>
                </span>
            </div>
        </div>
       </div>
    )
}