import { AppBar, Toolbar, Typography, Paper, TextField, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';
import kitchenBackground from '../../public/assets/kitchen_background.jpg';
import { useState } from 'react';
import userPool from '../aws_config/Cognito';
import CryptoJS from "crypto-js";

function generateSecretHash(username, clientId, clientSecret) {
    return CryptoJS.HmacSHA256(username + clientId, clientSecret).toString(CryptoJS.enc.Base64);
}


const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handle_registration = (event) => {
        event.preventDefault();
    
        const clientId = "42qk69ucev7p5j7jt7dpjtlisa"; 
        const clientSecret = "3ve2ub2g7k71rmb5hcka2id4c6e53q9erdhnvjbct9drip76hle"; 
    
        // Ensure AWS Cognito recognizes username & email attributes
        const attributes = [
            { Name: "email", Value: email }
        ];
                const secretHash = generateSecretHash(username, clientId, clientSecret);
    
                userPool.signUp(username, password, attributes, null, (err, data) => {
                    if (err) {
                        setMessage(err.message);
                    } else {
                        setMessage("Registration successful! Check your email for verification.");
                    }
                });                
    };
    ;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Header */}
            <AppBar sx={{ backgroundColor: '#ECEDEF' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Typography variant="h1" sx={{ fontSize: '32px', color: '#000', fontFamily: 'merriweather' }}>
                        FlavorCraft
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    backgroundImage: `url(${kitchenBackground})`,
                    backgroundSize: 'cover',
                }}
            >
                <Paper
                    component="form" 
                    onSubmit={handle_registration}
                    sx={{
                        backgroundColor: '#ECEDEF',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        fontFamily: 'merriweather',
                        alignItems: 'center',
                        height: '500px',
                        width: '300px',
                        padding: '25px',
                    }}
                >
                    <Typography variant="h2" sx={{ color: '#000', fontSize: '28px' }}>
                        Register
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <TextField
                            label="Enter Your Username"
                            variant="outlined"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            sx={{ marginBottom: '15px', width: '100%' }}
                            required
                        />
                        <TextField
                            label="Enter Your Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ marginBottom: '15px', width: '100%' }}
                            required
                        />
                        <TextField
                            label="Enter Your Password"
                            type="password" 
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{ marginBottom: '25px', width: '100%' }}
                            required
                        />

                        <Button variant="contained" type="submit" sx={{ backgroundColor: '#2EC698', width: '100%' }}>
                            Register
                        </Button>
                    </Box>

                    {message && <Typography sx={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>{message}</Typography>}

                    <Typography component={Link} to="/login">
                        Already Have An Account? Login!
                    </Typography>
                </Paper>
            </Box>

            <Footer />
        </Box>
    );
};

export default Register;

