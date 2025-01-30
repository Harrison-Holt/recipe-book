import { AppBar, Toolbar, Typography, Paper, TextField, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'   
import Footer from './Footer.jsx'
import kitchenBackground from '../../public/assets/kitchen_background.jpg';
import { useState } from 'react'
import userPool from '../aws_config/Cognito.js'

const Register = () => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handle_registration = (event) => {
        event.preventDefault()

        userPool.signUp(username, password, [{ Name: 'email', Value: email }], null, (err, data) => {
            if (err) {
                setMessage(err.message);
            } else {
                setMessage('Registration successful! Check your email for verification.');
            }
        });
    }

    return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
    { /* Header Content */ }
    <AppBar sx={{ backgroundColor: '#ECEDEF'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
            <Typography variant='h1' sx={{ fontSize: '32px', color: '#000', fontFamily: 'merriweather'}}>FlavorCraft</Typography>
        </Toolbar>
    </AppBar>

    { /* Main Content */ }
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, backgroundImage: `url(${kitchenBackground})`, backgroundSize: 'cover'}}>
        <Paper compment='form' onSubmit={handle_registration} sx={{ backgroundColor: '#ECEDEF', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', fontFamily: 'merriweather', alignItems: 'center', height: '500px', width: '250px', padding: '25px'}}>
            <Typography variant='h2' sx={{ color: '#000', fontSize: '28px'}}>Register</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <TextField 
            label='Enter Your Username' 
            variant='outlined'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ marginBottom: '25px'}}
            />
               <TextField 
            label='Enter Your Email' 
            variant='outlined'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: '25px'}}
            />
              <TextField 
            label='Enter Your Password'
            variant='outlined'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </Box>
            <Button variant='contained' sx={{ backgroundColor: '#2EC698', width: '100%'}}>Register</Button>
            <Typography component={Link} to='/login'>Already Have An Account? Login!</Typography>
        </Paper>
    </Box>

    <Footer />
    </Box> 
    )
}

export default Register 