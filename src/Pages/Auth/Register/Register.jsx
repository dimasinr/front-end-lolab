import React,{ useState } from 'react'
import axios from 'axios'
import { NavbarAllPages } from '../../../Components/Navbar/NavbarAll'
import { Box, TextField } from '@mui/material';
import { AccountCircle, Lock, ContactPage, Email } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


function Register() {
const emblem = require('./../../../Components/img/emblem-hijau.png');

const navigate = useNavigate()

const [ register, setRegister ] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    noTelp: "",
})
    const [ error, setError ] = useState("")
    const handleChange = ({ currentTarget: input }) => {
        setRegister({ ...register, [input.name]: input.value });
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            const url = "https://be-lolab.herokuapp.com/api/auth/login";
            const { register: res } = await axios.post(url, register);
            console.log(res.message)
            navigate("/login");
        }catch(error){
            if( error.response && 
                error.response.status >= 400 &&
                error.response.status <= 500
            ){
                setError(error.response.message)
            }
        }
    }

return (
    <div>
    <NavbarAllPages />
    <div className='header-login'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 320"><path fill="#25979D" fillOpacity="1" d="M0,160L40,138.7C80,117,160,75,240,80C320,85,400,139,480,181.3C560,224,640,256,720,266.7C800,277,880,267,960,256C1040,245,1120,235,1200,202.7C1280,171,1360,117,1400,90.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
    </div>

    <div className="row login-between">
        <div className="col-md-4">
            <div>
                <img  className="emblem" src={emblem} alt="" />
            </div>                
        </div>
        
        <div className="col-md-4">
        <div className="card shadow-card justify-content-center form-reg" style={{ borderRadius: "25px" }}>
       <div className='card-body'>
        <span className='mt-4' style={{ display: 'flex'}}>
            <h4>Register</h4>
        </span>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="mb-2 mt-2">
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
            id="input-with-sx" 
            label="First Name" 
            fullWidth variant="standard"
            value={register.firstName} 
            onChange={handleChange}
            />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="mb-2 mt-2">
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
            id="input-with-sx" 
            label="Last Name" 
            fullWidth 
            variant="standard" 
            value={register.lastName}
            onChange={handleChange}
            />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="mb-2 mt-2">
            <Email sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
            id="input-with-sx" 
            label="Email" 
            fullWidth 
            variant="standard" 
            value={register.email}
            onChange={handleChange}
            />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField  
            type="password" 
            id="input-with-sx" 
            label="Password" 
            hiddenLabel 
            fullWidth 
            variant="standard" 
            value={register.password}
            onChange={handleChange}
            />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="mb-2 mt-2">
            <ContactPage sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
            id="input-with-sx" 
            label="Nomor Telefon" 
            fullWidth 
            variant="standard" 
            value={register.noTelp}
            onChange={handleChange}
            />
        </Box>
        {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="mb-2 mt-2">
        <CalendarMonth sx={{ color: 'action.active', mr: 1, my: 0.5}} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Tanggal Lahir"
          value={birthday}
          onChange={(newValue) => {
            setBirthday(newValue);
          }}
          renderInput={(params) => <TextField variant="standard" {...params} fullWidth helperText={null} />}
        />
        </LocalizationProvider>
        </Box> */}
        <div className='justify-content-end' style={{ display: 'flex' }}>
        <button onClick={handleRegister} className='login-btn mt-4'>Register</button>
        </div>
        {error && <div className='styles.error_msg'>{error}</div>}
        <div className='justify-content-start' style={{ display: 'flex', marginTop: '10px' }}>
                <span className='text-muted text-sm'>Sudah punya akun?</span>
                <Link style={{ marginLeft: '5px', textDecoration: 'none' }} to="/login">Sign</Link>
            </div>
       </div>
        </div>
        </div>
    </div>
</div>
  )
}

export default Register