import './Navbar.css'
import { useState } from 'react';
import {Link} from 'react-router-dom'


function Navbar() {

    const [clicked, setClicked] = useState(false)


    const clickHandler = () => {
        setClicked(!clicked)
    }

    const hideHandler = (e) => {
        setClicked(!clicked)
    }

    const StyledLink = {
      color: 'black',
      textDecoration: 'none',
      margin:'10px', 

    }

return(
    
        <header className='navCon'>
            <div className='navLogo'>
               <Link to='/' style={StyledLink}><i className="fas fa-couch"></i></Link>
            </div>
            <div className='navIcon' onClick={clickHandler}>
               <i className={clicked ? "far fa-times-circle" : "fas fa-bars" }></i>
            </div>
            <ul className={clicked ? 'menuListHide' : 'menuList'}>
                <div className='menuItem'>
                <Link style={StyledLink} onClick={hideHandler} to='/'>Home</Link>
                <Link style={StyledLink} onClick={hideHandler} to='/Gallary'>Gallary</Link>
                <Link style={StyledLink} onClick={hideHandler} to='/ContactUs'>Contact Us</Link>
                </div>
            </ul>
        </header>
    
)
}



export default Navbar;