import React, { Component } from 'react';

class NavLogo extends Component {

    componentDidMount(){
        document.addEventListener ("scroll", () =>{
            const img = document.getElementById("nav-logo");
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
            
            if (scrollTop < 220) {
                img.src = "assets/img/logo-alt1-white.png";
            } else {
                img.src = "assets/img/logo-alt1-black.png";
            } 
        });
    }

    render(){
        return (
            <a href="index.html" className="navbar-brand">
               <img id="nav-logo" src="assets/img/logo-alt1-white.png" alt=""/>
            </a>
        )
    }
}

export default NavLogo;