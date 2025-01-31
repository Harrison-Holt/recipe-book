import Footer from './Footer.jsx'
import { AppBar, Toolbar, Typography, Box, Paper } from '@mui/material'
import FeaturedRecipes from './Featured_Recipes.jsx'
import { Link } from 'react-router-dom';

const Background = '/assets/kitchen_background.jpg';
const current_recipes = '/assets/current_reciepes_background.jpg';
const my_recipes = '/assets/my_recipes_background.jpg';

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
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center',  paddingTop: '50px', marginTop: '64px'}}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}> 
                <Paper sx={{ width: '350px', height: '400px', backgroundImage: `url(${current_recipes})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant='h4' sx={{ marginBottom: '20px', backgroundColor: '#fff'}}>Card #1</Typography>
                    <Link to="/explore_recipes" style={{ textDecoration: 'none', color: 'white', padding: '10px', backgroundColor: '#2EC698', borderRadius: '5px' }}>
                    View Current Recipes
                </Link>
                </Paper>
                <Paper sx={{ width: '350px', height: '400px', backgroundImage: `url(${my_recipes})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant='h4' sx={{ marginBottom: '20px', color: '#000', backgroundColor: '#fff'}}>Card #2</Typography>
                    <Link to="/my_recipes" style={{ textDecoration: 'none', color: 'white', padding: '10px', backgroundColor: '#2EC698', borderRadius: '5px' }}>
                    View My Recipes
                </Link>
                </Paper>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' , marginTop: '100px' }}> 

                <Typography variant='h3' sx={{ fontSize: '32px', color: '#000', textAlign: 'center', marginTop: '50px'}}>Featured Recipes</Typography>

                <FeaturedRecipes />
            </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export default Home 