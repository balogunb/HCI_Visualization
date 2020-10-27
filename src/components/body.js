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




export default function Body() {


  return (
    <div>
      <img src={DonateIMG} width='100%' height="50%" />
      <SliderComponent />

      

    </div>

  );
}