import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/grid';
import Logo from '../img/caclv_logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">

        <Toolbar>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
             >
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href='//caclv.org'>
                  <img src={Logo} width="100" height="60"/>
                </IconButton>
                <h1> Donate </h1>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon style={{ fontSize: 60  }}/>
                </IconButton>
            </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}