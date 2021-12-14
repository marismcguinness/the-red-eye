import React from 'react';
import Typography from '@mui/material/Typography';
import coffee from '../img/Quando Os Grãos (1).jfif';
import coffeeFlipped from '../img/Quando Os Grãos (2).jfif';
import community from '../img/One Year Later, Open Mic Night is Still Going Strong at The Reserve.jfif';
import farm from '../img/How to Drink Coffee More Sustainably.jfif';
import drink from '../img/Gilli Blend Coffee (1).jfif';
import Grid from '@mui/material/Grid';

const About = () => {
    return (
        <div style={{ width: '100%', height: '100vh', backgroundColor: '#E3CDA0' }}>
            <Grid style={{ height: '35%' }} container>
                <Grid item xs={6}>
                    <img src={coffee} style={{ width: '100%' }} alt="Coffee beans spilled"></img>
                </Grid>
                <Grid item xs={6}>
                    <img src={coffeeFlipped} style={{ width: '100%' }} alt="Coffee beans spilled"></img>
                </Grid>
            </Grid>
            <Typography variant="h1" style={{ fontSize: 120, paddingBottom: 10, fontFamily: 'Sancreek', color: "#4B9C70", display: 'flex', justifyContent: 'center' }}>About Us</Typography>
            <Typography variant="h3" style={{ fontSize: 35, paddingLeft: 30, paddingBottom: 50, fontFamily: 'Special Elite', color: "#EFB93F", display: 'flex', justifyContent: 'center' }}>
                Our mission is to bring the community together through our love & passion for delicious, ethically sourced, and creative coffee.
            </Typography>
            <Typography variant="h2" style={{ paddingBottom: 10, fontFamily: 'Special Elite', color: "#9E2E09", display: 'flex', justifyContent: 'center' }}>What do we believe in?</Typography>
            <Grid container style={{ backgroundColor: '#321D00', paddingBottom: 20 }} spacing>
                <Grid item xs={1.5} />
                <Grid item style={{ display: 'flex', justifyContent: 'center' }} xs={3}>
                    <img src={community} style={{ width: '100%' }} alt="Community"></img>
                </Grid>
                <Grid item style={{ display: 'flex', justifyContent: 'center' }} xs={3}>
                    <img src={farm} style={{ width: '100%' }} alt="Sustainable farming"></img>
                </Grid>
                <Grid item style={{ display: 'flex', justifyContent: 'center' }} xs={3}>
                    <img src={drink} style={{ width: '100%' }} alt="Coffee drink"></img>
                </Grid>
                <Grid item xs={1.5} />
            </Grid>
            <Grid container spacing style={{ backgroundColor: '#E3CDA0', paddingBottom: 10 }}>
                <Grid item xs={1.5} />
                <Grid item style={{ display: 'flex', justifyContent: 'center' }} xs={3}>
                    <Typography variant="h4" style={{ paddingTop: 10, color: '#510E00', fontFamily: 'Special Elite' }}>Community</Typography>
                </Grid>
                <Grid item style={{ display: 'flex', justifyContent: 'center' }} xs={3}>
                    <Typography variant="h4" style={{ paddingTop: 10, color: '#510E00', fontFamily: 'Special Elite' }}>Sustainability</Typography>
                </Grid>
                <Grid item style={{ display: 'flex', justifyContent: 'center' }} xs={3}>
                    <Typography variant="h4" style={{ paddingTop: 10, color: '#510E00', fontFamily: 'Special Elite' }}>Quality</Typography>
                </Grid>
                <Grid item xs={1.5} />
            </Grid>
            <Grid container spacing={4} style={{ backgroundColor: '#E3CDA0' }}>
                <Grid item xs={1.5} />
                <Grid item style={{ display: 'flex', justifyContent: 'center' }} xs={3}>
                    <Typography style={{ fontFamily: 'PT Mono', color: '#212529' }}>
                        We strive to create an inclusive and supportive space for people in our community to come and connect with others. Whether you are an artist, student, 
                        teacher, or whatever else you may be, we welcome you to work or relax in our space. Let us know if there are any community events you would like to host here after hours!
                    </Typography>
                </Grid>
                <Grid item style={{ display: 'flex', justifyContent: 'center' }} xs={3}>
                    <Typography style={{ fontFamily: 'PT Mono', color: '#212529' }}>
                        We aim to leave the world a better place than when we found it. Due to climate change, nearly 60% of wild coffee species could disappear within the next few decades. This is why we have partered with farmers in the Jalapa region of Guatemala to support their agroforestry program by donating 10% of all profits. 
                    </Typography>
                </Grid>
                <Grid item style={{ display: 'flex', justifyContent: 'center' }} xs={3}>
                    <Typography style={{ fontFamily: 'PT Mono', color: '#212529' }}>
                        We take pride in serving our Red Eye family only the best coffee drinks. This is why we roast all our coffee beans in-house in our roastery. We are constantly innovating our menu using only seasonal ingrediants sourced from local farms and markets. We hope you love change, because we love it too!
                    </Typography>
                </Grid>
                <Grid item xs={1.5} />
            </Grid>
        </div>
    );
}

export default About;