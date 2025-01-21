import { Box, Toolbar, Typography, Button } from '@mui/material'
import '@fontsource/merriweather/400.css';

const Footer = () => {
    return (
    <>
    <Box sx={{ backgroundColor: '#ECEDEF'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography variant='body1' sx={{ color: '#000', fontFamily: 'merriweather', textAlign: 'center'}}>&copy;2025 FlavorCraft</Typography>
            <Button variant='contained' sx={{ backgroundColor: '#000', color: '#fff' }}>Settings</Button>
        </Toolbar>
    </Box>
    </>
    )
}

export default Footer 
