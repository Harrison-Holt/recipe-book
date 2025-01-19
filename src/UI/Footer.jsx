import { Box, Toolbar, Typography } from '@mui/material'
import '@fontsource/merriweather/400.css';

const Footer = () => {
    return (
    <>
    <Box sx={{ backgroundColor: '#ECEDEF'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant='body1' sx={{ color: '#000', fontFamily: 'merriweather'}}>&copy;2025 FlavorCraft</Typography>
        </Toolbar>
    </Box>
    </>
    )
}

export default Footer 
