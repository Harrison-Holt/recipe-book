import {  Typography, Paper, Button, Grid } from '@mui/material'

const FeaturedReacipes = () => {

    return (
        <Grid container columns={2} spacing={2} sx={{ display: 'flex', alignItems: 'center'}}>
        <Grid xs={1} item>
        <Paper sx={{ width: '350px', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant='h4' sx={{ marginBottom: '20px', backgroundColor: '#fff'}}>Card #1</Typography>
        <Button variant='contained' sx={{ backgroundColor: '#2EC698'}}>View Current Recipes</Button>
        </Paper>
        </Grid>
        <Grid xs={1} item>
        <Paper sx={{ width: '350px', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant='h4' sx={{ marginBottom: '20px', backgroundColor: '#fff'}}>Card #1</Typography>
        <Button variant='contained' sx={{ backgroundColor: '#2EC698'}}>View Current Recipes</Button>
        </Paper>
        </Grid>
        <Grid xs={1} item>
        <Paper sx={{ width: '350px', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant='h4' sx={{ marginBottom: '20px', backgroundColor: '#fff'}}>Card #1</Typography>
        <Button variant='contained' sx={{ backgroundColor: '#2EC698'}}>View Current Recipes</Button>
        </Paper>
        </Grid>
        <Grid xs={1} item>
        <Paper sx={{ width: '350px', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant='h4' sx={{ marginBottom: '20px', backgroundColor: '#fff'}}>Card #1</Typography>
        <Button variant='contained' sx={{ backgroundColor: '#2EC698'}}>View Current Recipes</Button>
        </Paper>
        </Grid>
    </Grid>
    )
}

export default FeaturedReacipes
