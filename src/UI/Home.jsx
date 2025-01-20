import Footer from './Footer.jsx'
import Background from '../../public/assets/kitchen_background.jpg'
import { AppBar, Toolbar, Typography, Box, Paper } from '@mui/material'
const Home = () => {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            { /* Header Content */ }
            <AppBar sx={{ backgroundColor: '#ECEDEF'}}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Typography variant='h1' sx={{ fontSize: '32px', color: '#000'}}>FlavorCraft</Typography>
                </Toolbar>
            </AppBar>

            { /* Main Content */ }
            <Box sx={{ minHeight: '100vh', backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <Typography variant='h2' sx={{ color: '#000'}}>Home</Typography>
                <Paper>
                    <Typography variant='body1'>Card #1</Typography>
                </Paper>
            </Box>

            <Footer />
        </Box>
    )
}

export default Home 