import { Box, Toolbar, Typography, Button } from '@mui/material'
import '@fontsource/merriweather/400.css';

const Footer = () => {
    return (
    <>
    <Box sx={{ backgroundColor: '#ECEDEF'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start'}}>
            <Typography variant='body1' sx={{ color: '#000', fontFamily: 'merriweather'}}>&copy;2025 FlavorCraft</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
            <Button variant='contained' sx={{ backgroundColor: '#000', color: '#fff' }}>Settings</Button>
            </Box>
        </Toolbar>
    </Box>
    </>
    )
}

export default Footer 
