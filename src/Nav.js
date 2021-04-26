import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import "./Nav.css";

function Nav() {
    const [show,handleShow] = useState(false);
    const history = useHistory();
    const transitionNavBar =() => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar);
    }, [])
    return ( 
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
            <img 
            onClick={() => history.push("/")}
            className='nav_logo'
            src="https://fontmeme.com/permalink/210301/cebbe7e9d6ab45bf807181b7a497ef96.png" 
            alt="" 
            />
            <img
            onClick={() => history.push("/profile")}
            className='nav_avatar'
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
            alt=""
            />
        </div>
        </div>
    )
}

export default Nav
