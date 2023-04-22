import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import 'font-awesome/css/font-awesome.min.css';
import FontAwesome from 'react-fontawesome'
import "./Component_Styles/login.css";
import axios, * as others from 'axios';

function Login()
{
    const navigate = useNavigate();

    function setCookie(cname, cvalue, exdays) 
    {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
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
        return "";
    }
    
    function checkCookie() 
    {
        let x = getCookie("Surya");
        if (x === "Chill bro")
        {
            return 1;
        } 
        return 0;
    }

    if(checkCookie())
    {
        navigate('/');
    }

    const [credential, setCredentials] = useState({
        username: "",
        password: ""
    });

    function handleChange(event)
    {
        const {name, value} = event.target;
        setCredentials((prev) => {
        return {...prev, [name]: value};
        });
    }

    function handleSubmit(event)
    {
        event.preventDefault();

        function LoginCheck(param)
        {
            if(param)
            {
                setCookie("Surya", "Chill Bro", 1);
                
                console.log("Cookie Set: ", getCookie("Surya"));   
                navigate('/');   
            }
            else
            {
                console.log("Please Enter Correct Credentials.");
            }
        }

        // axios.post("http://localhost:8080/login", {credential})
        // .then(res => LoginCheck(res.data.flag))
        // .catch(error => { console.log("Error sending Credentials: ", error) });

        axios.post("https://esports-server.onrender.com/login", {credential})
        .then(res => LoginCheck(res.data.flag))
        .catch(error => { console.log("Error sending Credentials: ", error) });

        setCredentials({username: "", password: ""});
    }

    useEffect(()=> {
        // axios.get("http://localhost:8080/login").then((res) => {
        //   console.log(res.data);
        // });

        axios.get("https://esports-server.onrender.com/login").then((res) => {
          console.log(res.data);
        });
    }, []);

    return (
        <div className="login-body">
            <Navbar className="navbar-login">
                <Container>
                    <Navbar.Brand className="login-nav-brand" href="/">
                        Esports
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <div className="login-form">
                <p>* for Authorized persons only.</p>
                <Form onSubmit={handleSubmit} autocomplete="off">
                    <div className="input-icons">
                        <FontAwesome className="icon" name='user' size='1x' />
                        <Form.Control className="form-input" type="text" placeholder="Username" name="username" value={credential.username} onChange={handleChange} />
                        <FontAwesome className="icon" name='lock' size='1x' />
                        <Form.Control className="form-input" type="password" placeholder="Password" name="password" value={credential.password} onChange={handleChange} />
                    </div>
                    <input className="login-btn" type="submit" name="" value="LOGIN" />
                </Form>

                <FontAwesome className="icon2" name='github' size='1x' />
                <FontAwesome className="icon3" name='facebook' size='1x' />
                <FontAwesome className="icon4" name='linkedin' size='1x' />
                <FontAwesome className="icon5" name='twitter' size='1x' />
            </div>
            
        </div>
    );
}

export default Login