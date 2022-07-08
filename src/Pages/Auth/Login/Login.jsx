import React, { useState } from 'react'
import axios from 'axios';
import { Box, TextField } from '@mui/material';
// , Input, InputLabel, InputAdornment, FormControl ,{ useState, useEffect } 
import { AccountCircle, Lock } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { NavbarAllPages } from '../../../Components/Navbar/NavbarAll'
import './login.css'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/Context';
import { useNavigate } from 'react-router-dom';

function Login() {
    const emblem = require('./../../../Components/img/emblem-hijau.png');

    const navigate = useNavigate()
    const [ credentials, setCredentials ] = useState({
        username: undefined,
        password: undefined,
    })
    // loading
    const { error, dispatch} = useContext(AuthContext);

    const handleChange = (e) =>{
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    }

    const handleClick = async e =>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post("https://be-lolab.herokuapp.com/api/auth/login", credentials)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate('/')
        }catch(err){
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
        }
    };

    // console.log(user)

return (
    <div>
        <NavbarAllPages />
        <div className='header-login'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 320"><path fill="#25979D" fillOpacity="1" d="M0,160L40,138.7C80,117,160,75,240,80C320,85,400,139,480,181.3C560,224,640,256,720,266.7C800,277,880,267,960,256C1040,245,1120,235,1200,202.7C1280,171,1360,117,1400,90.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        </div>

        <div className="row login-between">
            <div className="col-md-4">
            <div>
            <img className="emblem" src={emblem} alt="" />
            </div>                
            </div>
            
            <div className="col-md-4">
            <div className="card shadow-card justify-content-center form-log" style={{ borderRadius: "25px" }}>
           <div className='card-body'>
           <span className='mt-4' style={{ display: 'flex'}}>
                <h4>Login</h4>
            </span>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="mb-2 mt-2">
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField 
                id="username" 
                label="Username" 
                fullWidth variant="standard"
                // value={email}
                onChange={handleChange} 
            />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField  
                type="password" 
                id="password" 
                label="Password" 
                hiddenLabel 
                fullWidth 
                variant="standard" 
                // value={password}
                onChange={handleChange} 
                />
            </Box>
            <div className='justify-content-end' style={{ display: 'flex' }}>
            <button onClick={handleClick} type="submit" className='login-btn mt-4'>Login</button>
            {error && <span>{error.message}</span> }
            </div>
            <div className='justify-content-start mb-4' style={{ display: 'flex', marginTop: '10px' }}>
                <span className='text-muted text-sm'>don't have an account?</span>
                <Link style={{ marginLeft: '5px', textDecoration: 'none' }} to="/register">register</Link>
            </div>
           </div>
            </div>
            </div>
        </div>
    </div>
  ) 
}

export default Login