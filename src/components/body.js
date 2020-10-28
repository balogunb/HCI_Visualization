import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DonateIMG from '../img/donate.jpeg'
import SliderComponent from './slider.js'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import DonationType from './donationType.js';
import DesignationSelect from './donationDesignation.js'
import AddressForm from './AddressForm.js'




export default function Body() {


  return (
    <div>
      <img src={DonateIMG} width='100%' height="50%" />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md" style={{ backgroundColor: '#f2e2c9' }}>
          <SliderComponent/>
          <DonationType/>
          <DesignationSelect/>
         
        </Container>
      </React.Fragment>
      <React.Fragment>
        <CssBaseline />
          <Container maxWidth="md" style={{ backgroundColor: '#f2e2c9'}}>
            <AddressForm/>
          </Container>
      </React.Fragment>


      


      

    </div>

  );
}