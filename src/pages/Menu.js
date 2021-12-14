import React from 'react';
import Typography from '@mui/material/Typography';
import cappuccino from '../img/cappuccino.jfif';
import americano from '../img/americano.jfif';
import cortado from '../img/cortado.jfif';
import drip from '../img/drip.png';
import espresso from '../img/espresso.jfif';
import flat from '../img/flat_white.jfif';
import latte from '../img/latte.jfif';
import macchiato from '../img/macchiato.jfif';
import mate from '../img/mate.jfif';
import Grid from '@mui/material/Grid';
import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Menu = () => {

    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [name, setName] = React.useState('');
    const [serve, setServe] = React.useState('');
    const [description, setDescription] = React.useState('');

    const handleClick = (drink, event) => {
        setName(drink.name);
        setServe(drink.serve);
        setDescription(drink.description);
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    const menu = [
        {
            name: 'espresso',
            serve: 'hot only',
            description: '1 oz. of sweet, sweet concentrated espresso. if you usually take your coffee black, and want to try something new, this might be for you. ',
            img: espresso
        },
        {
            name: 'drip',
            serve: 'hot only',
            description: "your standard cup of coffee, can't go wrong here!",
            img: drip
        },
        {
            name: 'americano',
            serve: 'hot or iced',
            description: 'espresso with hot water. for the person who wants something to sip, while still getting a good amount of caffeine.',
            img: americano
        },
        {
            name: 'macchiato',
            serve: 'hot only',
            description: 'espresso topped with a little bit of milk foam. light, but balanced.',
            img: macchiato
        },
        {
            name: 'cortado',
            serve: 'hot only',
            description: 'espresso topped with a little bit of steamed milk and foam to finish it off. one step up from a macchiato.',
            img: cortado
        },
        {
            name: 'cappucinno',
            serve: 'hot only',
            description: 'espresso with steamed milk and foam - a little more than a cortado, but a little less than a latte.',
            img: cappuccino
        },
        {
            name: 'flat white',
            serve: 'hot only',
            description: 'for cappucino lovers who hate the foam, this is your drink.',
            img: flat
        },
        {
            name: 'cafe latte',
            serve: 'hot or iced',
            description: 'the traditional latte that you know and love.',
            img: latte
        },
        {
            name: 'mate latte',
            serve: 'hot or iced',
            description: 'for those of us who are a little more sensitive to coffee. mate is a tea-like brew that is super high in anti-oxidants, and gives you lots of energy without the adverse effects of caffeine.',
            img: mate
        }
    ]
    return (
        <div style={{ backgroundColor: '#153325' }}>
            <Typography variant="h1" style={{ display: 'flex', justifyContent: 'center', paddingTop: 30, fontFamily: 'Sancreek', color: "#EFB93F" }}>Menu</Typography>
            <Typography variant="h5" style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Special Elite', color: "#C47815" }}>Click on the name of each drink for more information!</Typography>
            <Grid style={{ paddingLeft: 100, paddingRight: 100, paddingTop: 20 }} container>
                {menu.map(drink => (
                    <Grid style={{ display: 'flex', justifyContent: 'center' }} item xs={4}>
                        <Grid style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }} container>
                            <Grid item style={{ display: 'flex', justifyContent: 'center' }} xs={12}>
                                <img src={drink.img} style={{ width: '100%' }} alt={drink.name}></img>
                            </Grid>
                            <Grid item style={{ display: 'flex', justifyContent: 'center' }} xs={12}>
                                <button onClick={(e) => handleClick(drink, e)} style={{ margin: 10, border: '0px solid transparent', backgroundColor: '#153325' }} >
                                    <Typography variant='h4' style={{ color: '#E3CDA0', fontFamily: 'Special Elite' }} >{drink.name}</Typography>
                                </button>
                                <Popper id={id} open={open} anchorEl={anchorEl}>
                                    <Box>
                                        <Paper style={{ padding: 10, backgroundColor: '#F8F9FA' }} elevation={2}>
                                            <Typography variant='h4' style={{ fontFamily: 'Special Elite', display: 'flex', justifyContent: 'center', color: '#321D00' }}>{name}</Typography>
                                            <Typography variant='h6' style={{ fontFamily: 'Special Elite', display: 'flex', justifyContent: 'center', color: '#321D00' }}>served {serve}</Typography>
                                            <Typography style={{ fontFamily: 'Special Elite', display: 'flex', justifyContent: 'center', fontStyle: 'italic', color: '#321D00' }}>{description}</Typography>
                                        </Paper>
                                    </Box>
                                </Popper>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Menu;