import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as Link2 } from "react-scroll";
import iiitk_logo from "../Images/iiitk_logo.png";

import axios, * as others from 'axios';

import "../Component_Styles/navbar.css";

export default function Navbar()
{
    const navRef = useRef();
    const navigate = useNavigate();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    var status = false;

    function getCookie(cname) 
    {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
        }
        return "0";
    }

    function checkCookie() {
        let x = getCookie("Surya");
        if (x == "Chill Bro") 
        {
            status = true;
        } 
    }

    checkCookie();

    function handleLogin()
    {
        navigate('/login');
    }

    function handleLogout()
    {
        document.cookie = 'Surya=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        axios.get("http://localhost:8080/logout").then((res) => {window.location.reload(false);});

        //navigate('/');
    }

    return (

        <header className="navigBar">
                <img className="logo-img" src={iiitk_logo} alt="logo" />
            <a href="/" className="navig-brand">
               <span>Esports</span>
            </a>
            <nav className="navig-items" ref={navRef}>

                <Link2 spy={true} smooth={true} offset={-170} duration={500} className="navig-item home-btn" to="home"> Home </Link2>
                <Link2 spy={true} smooth={true} offset={-150} duration={500} className="navig-item" to="announcements"> Announcements </Link2>
                <Link2 spy={true} smooth={true} offset={-170} duration={500} className="navig-item" to="pasthistory"> History </Link2>
                <Link2 spy={true} smooth={true} offset={-160} duration={500} className="navig-item" to="services"> Services </Link2>

                {!status && <button className="get-started" onClick={handleLogin}> Login </button>}
                {status && <button className="get-started" onClick={handleLogout}> LogOut </button>}
                
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}