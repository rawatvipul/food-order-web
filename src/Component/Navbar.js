import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar()
{
    return(
        <div className="navbar">
            
            <li>
                <Link style={{color:' white', backgroundColor:'grey', padding: '5px 20px', borderRadius:'12px'}} to='/' >Home</Link>
            </li>
            <li>
                <Link style={{color:'white', backgroundColor:'grey', padding: '5px 20px', borderRadius:'12px'}} to='/about' >About</Link>
            </li>
            <li>
                <Link style={{color:'white', backgroundColor:'grey', padding: '5px 20px', borderRadius:'12px'}} to='/service' >Service</Link>
            </li>
            <li>
                <Link style={{color:'white', backgroundColor:'grey', padding: '5px 20px', borderRadius:'12px'}} to='/contact' >Contact</Link>
            </li>
        </div>
    )
}

export default Navbar;