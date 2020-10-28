import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SliderComponent from './slider.js'
import DonationType from './donationType.js';
import DesignationSelect from './donationDesignation.js'

export default function DonationPage() {
  return (
    <React.Fragment>
      <SliderComponent/>
      <DonationType/>
      <DesignationSelect/>
    </React.Fragment>
  );
}