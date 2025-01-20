import Footer from './Footer.jsx'
import Background from '../../public/assets/kitchen_background.jpg'
import current_recipes from '../../public/assets/current_reciepes_background.jpg'
import my_recipes from '../../public/assets/my_recipes_background.jpg'
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
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '64px'}}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}> 
                <Paper sx={{ width: '500px', height: '500px', backgroundImage: `url(${current_recipes})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <Typography variant='body1'>Card #1</Typography>
                </Paper>
                <Paper sx={{ width: '500px', height: '500px', backgroundImage: `url(${my_recipes})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <Typography variant='body1'>Card #1</Typography>
                </Paper>
            </Box>
            </Box>

            <Footer />
        </Box>
    )
}

export default Home 