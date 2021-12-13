import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import { Divider } from '@mui/material';
import logo from '../img/BEIGE LOGO (1).png';

const Navigation = () => {

  return (
    <div style={{ backgroundColor: '#321D00', fontFamily: 'Sancreek' }} >
      <Grid container style={{ display: 'flex', alignItems: 'center', padding: 10 }} spacing={4}>
        <Grid item>
          <Link to="/"><img src={logo} alt="The Red Eye Cafe" style={{ width: '88px' }}></img></Link>
        </Grid>
        <Grid item>
          <Link to="/about" style={{ color: '#E3CDA0', textDecoration: 'none' }}>About</Link>
        </Grid>
        <Grid item>
          <Link to="/menu" style={{ color: '#E3CDA0', textDecoration: 'none' }} >Menu</Link>
        </Grid>
        <Grid item>
          <Link to="/products"style={{ color: '#E3CDA0', textDecoration: 'none'  }} >Products</Link>
        </Grid>
        <Divider />
      </Grid>
    </div>
  );
}
export default Navigation;