import { Typography, Paper, Button, Grid, Box } from '@mui/material';

const FeaturedRecipes = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Centers vertically and horizontally
      }}
    >
      <Grid
        container
        spacing={3} // Adds spacing between grid items
        sx={{
          maxWidth: '800px', // Restrict grid width for proper alignment
        }}
      >
        {/* Card 1 */}
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              width: '100%',
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
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              width: '100%',
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
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              width: '100%',
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
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              width: '100%',
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
