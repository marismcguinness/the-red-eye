import React from 'react';
import Typography from '@mui/material/Typography';

import compost from '../img/Bamboozle Compost Bin.jfif';
import cup from '../img/Keep Cup Reusable Coffee Cup.png';
import pourover from '../img/Set of Coffee Dripper, Coffee Jug, Pot, Ceramic Pour Over Coffee Set, Tumbler, Handmade Ceramic, Pour Over, Gift Set, Reusable Filters.jfif';
import filter from '../img/Reusable Cotton Coffee Filter _ Size 4 (by the unit).jfif';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Products = () => {

    const reusableCup =
    {
        name: 'Reusable Coffee Cup with Cork Holder',
        description: 'This reusable glass 12 oz. cup has a cork holder to keep your hands comfortable while enjoying your drink. Anyone who brings this cup into the store is welcome to a free refill of their drink of choice!',
        img: cup
    };

    const reusableFilter =
    {
        name: 'Reusable Coffee Filters',
        description: 'Do you make coffee from home? Do you feel bad about all those coffee filters going in the trash? These coffee filters are resuable - just handwash and you can make infinite cups of coffee for your WFH grind.',
        img: filter
    };

    const reusablePourover =
    {
        name: 'Ceramic Pourover Set',
        description: 'This adorable, one-of-a-kind ceramic pourover set is handmade by an artist in our community. We get it, coffee addiction can be an expensive hobby. Switch up your routine and make coffee at home with this amazing set!',
        img: pourover
    };

    const reusableCompost =
    {
        name: 'Personal Compost Bin',
        description: 'Hey coffee lover, did you know most coffee grounds and some filters are actually compostable? You can keep this cute compost bin on your coffee cart at home to toss those grounds away after making your morning (or afternoon ... no judgement from us) cup of coffee.',
        img: compost
    };

    return (
        <div style={{ backgroundColor: '#E3CDA0' }}>
            <Typography variant="h1" style={{ display: 'flex', justifyContent: 'center', paddingTop: 30, fontFamily: 'Sancreek', color: "#153325" }}>Products</Typography>
            <Grid container padding={5}>
                <Grid item xs={3} />
                <Grid item xs={3}>
                    <img style={{ maxHeight: 486, maxWidth: 347 }} src={reusablePourover.img} alt={reusablePourover.name} />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='h4' style={{ fontFamily: 'Special Elite', color: '#321D00' }}>{reusablePourover.name}</Typography>
                    <Typography style={{ fontFamily: 'PT Mono', color: '#321D00' }}>{reusablePourover.description}</Typography>
                    <Grid container style={{ marginTop: 50, display: 'flex', justifyContent: 'center' }}>
                        <Button style={{ backgroundColor: '#0B4732' }} variant='contained'>Add to Cart</Button>
                    </Grid>                </Grid>
                <Grid item xs={2} />
            </Grid>
            <Grid container padding={5} style={{ backgroundColor: '#321D00' }}>
                <Grid item xs={3}></Grid>
                <Grid item xs={4}>
                    <Typography variant='h4' style={{ fontFamily: 'Special Elite', color: '#E3CDA0' }}>{reusableCup.name}</Typography>
                    <Typography style={{ fontFamily: 'PT Mono', color: '#E3CDA0' }}>{reusableCup.description}</Typography>
                    <Grid container style={{ marginTop: 50, display: 'flex', justifyContent: 'center' }}>
                        <Button style={{ backgroundColor: '#0B4732' }} variant='contained'>Add to Cart</Button>
                    </Grid>                </Grid>
                <Grid style={{ display: 'flex', justifyContent: 'right' }} item xs={3}>
                    <img style={{ maxHeight: 486, maxWidth: 347 }} src={reusableCup.img} alt={reusableCup.name} />
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
            <Grid container padding={5}>
                <Grid item xs={3} />
                <Grid item xs={3}>
                    <img style={{ maxHeight: 486, maxWidth: 347 }} src={reusableFilter.img} alt={reusableFilter.name} />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='h4' style={{ fontFamily: 'Special Elite', color: '#321D00' }}>{reusableFilter.name}</Typography>
                    <Typography style={{ fontFamily: 'PT Mono', color: '#321D00' }}>{reusableFilter.description}</Typography>
                    <Grid container style={{ marginTop: 50, display: 'flex', justifyContent: 'center' }}>
                        <Button style={{ backgroundColor: '#0B4732' }} variant='contained'>Add to Cart</Button>
                    </Grid>                </Grid>
                <Grid item xs={2} />
            </Grid>
            <Grid container padding={5} style={{ backgroundColor: '#321D00' }}>
                <Grid item xs={3}></Grid>
                <Grid item xs={4} >
                    <Typography variant='h4' style={{ fontFamily: 'Special Elite', color: '#E3CDA0' }}>{reusableCompost.name}</Typography>
                    <Typography style={{ fontFamily: 'PT Mono', color: '#E3CDA0' }}>{reusableCompost.description}</Typography>
                    <Grid container style={{ marginTop: 50, display: 'flex', justifyContent: 'center' }}>
                        <Button style={{ backgroundColor: '#0B4732' }} variant='contained'>Add to Cart</Button>
                    </Grid>
                </Grid>
                <Grid style={{ display: 'flex', justifyContent: 'right' }} item xs={3}>
                    <img style={{ maxHeight: 486, maxWidth: 347 }} src={reusableCompost.img} alt={reusableCompost.name} />
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
    );
}

export default Products;