import Footer from './Footer.jsx'
import Background from '../../public/assets/kitchen_background.jpg'
import { AppBar, Toolbar, Typography, Box, Button, TextField } from '@mui/material'
import FeaturedReacipes from './Featured_Recipes.jsx'

const My_Recipes = () => {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            { /* Header Content */ }
            <AppBar sx={{ backgroundColor: '#ECEDEF'}}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Typography variant='h1' sx={{ fontSize: '32px', color: '#000'}}>FlavorCraft</Typography>
                </Toolbar>
            </AppBar>

            { /* Main Content */ }
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center',  paddingTop: '50px', marginTop: '64px'}}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' , marginTop: '100px' }}> 
                <TextField
                    label='Enter Your Username'
                    variant='outlined'
                    sx={{ marginBottom: '25px'}}
                />
                <Button variant='contained' sx={{ backgroundColor: '#2EC698', width: '100%'}}>Search</Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' , marginTop: '100px' }}> 

                <Typography variant='h3' sx={{ fontSize: '32px', color: '#000', textAlign: 'center', marginTop: '50px'}}>Featured Recipes</Typography>

                <FeaturedReacipes />
            </Box>
            </Box>

            <Footer />
        </Box>
    )
}

export default My_Recipes 