import { useNavigate } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { InfoContext } from "../Context/InfoContext";

const Navbar = () => {
    
    const {email} = useContext(InfoContext)
    const navigate = useNavigate()

    const handleLogoutClick = () => {
        const confirmLogout = window.confirm('Are you sure you want to log out?');

            if (confirmLogout){
                navigate('/')
            }else{
                
            }
    }
    const handleCartClick = () => {
        navigate('/cart')
    }
    const handleEmailClick = () => {
        navigate('/email')
    }
    return(
        <div className="navbar">
            <button onClick={handleLogoutClick}>Logout</button>
            <button onClick={handleCartClick}>Cart</button>
            <button onClick={handleEmailClick}>{email ? email: 'E-mail'}</button>
        </div>
    )
}

export default Navbar;