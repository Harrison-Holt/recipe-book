import { Typography, Paper, Button, Grid, Box } from '@mui/material';

const FeaturedRecipes = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Ensures full vertical centering
      }}
    >
      <Grid
        container
        columns={2}
        spacing={4} 
        sx={{
          justifyContent: 'center', // Horizontal centering of grid items
        }}
      >
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              width: '350px',
              height: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                marginBottom: '20px',
                backgroundColor: '#fff',
                padding: '5px',
                borderRadius: '4px',
              }}
            >
              Card #1
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: '#2EC698' }}>
              View Current Recipes
            </Button>
          </Paper>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              width: '350px',
              height: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                marginBottom: '20px',
                backgroundColor: '#fff',
                padding: '5px',
                borderRadius: '4px',
              }}
            >
              Card #2
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: '#2EC698' }}>
              View Current Recipes
            </Button>
          </Paper>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              width: '350px',
              height: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                marginBottom: '20px',
                backgroundColor: '#fff',
                padding: '5px',
                borderRadius: '4px',
              }}
            >
              Card #3
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: '#2EC698' }}>
              View Current Recipes
            </Button>
          </Paper>
        </Grid>

        {/* Card 4 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              width: '350px',
              height: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                marginBottom: '20px',
                backgroundColor: '#fff',
                padding: '5px',
                borderRadius: '4px',
              }}
            >
              Card #4
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: '#2EC698' }}>
              View Current Recipes
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturedRecipes;

