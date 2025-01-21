import { Box, Toolbar, Typography, Button } from '@mui/material';
import '@fontsource/merriweather/400.css';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#ECEDEF', padding: '10px 0' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Typography centered horizontally */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Typography variant="body1" sx={{ color: '#000', fontFamily: 'merriweather' }}>
            &copy;2025 FlavorCraft
          </Typography>
        </Box>

        {/* Button aligned to the right */}
        <Button variant="contained" sx={{ backgroundColor: '#000', color: '#fff', marginRight: '100px'}}>
          Settings
        </Button>
      </Toolbar>
    </Box>
  );
};

export default Footer;

