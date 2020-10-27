import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '40%',
    height: 8,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '$0',
  },
  {
    value: 100,
    label: '$100',
  },
  {
    value: 250,
    label: '$250',
  },
  {
    value: 500,
    label: '$500',
  },
  {
    value: 750,
    label: '$750',
  },
  {
    value: 1000,
    label: '$1000',
  },
];


const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);


const MainSlider = withStyles({
  root: {
    height: 20,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -2,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 20,
    borderRadius: 4,
  },
  markLabel: {
    color: 'red',
    transform: 'translate(-50%,50%)',
    
  },
  mark: {
    height: 20,
    
  },
  markActive: {
    height: 20,
    
  },

  rail: {
    height: 20,
    borderRadius: 0,
  },
})(Slider);

function valuetext(value) {
  return `${value}°C`;
}

export default function SliderComponent() {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-custom" gutterBottom>
        Donate Amount
      </Typography>
      <MainSlider 
        defaultValue={500}
        valueLabelDisplay="auto" 
        aria-label="pretto slider" 
        defaultValue={20}
        marks={marks}
        step={50}
        min={0}
        max={1000}
        />
    </div>    
  );
}