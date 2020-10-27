import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import clsx from 'clsx';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



export default function DonationType() {

  const [value, setValue] = React.useState('True');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset">
        <Typography variant="h5"  display="block">
          Donation Type
        </Typography>
        <RadioGroup 
          aria-label="DonationType"  
          name="DonationType" 
          value={value} 
          onChange={handleChange}
        >
          <FormControlLabel value="True" control={<Radio color='primary'/>} label="One Time Donation" />
          <FormControlLabel value="False" control={<Radio color='primary'/>} label="Recurring Donation" />
        </RadioGroup>
      </FormControl>


      
    </div>

  );
}