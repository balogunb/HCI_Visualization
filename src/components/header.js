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
         
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <img src="https://www.caclv.org/wp-content/uploads/2017/04/Artboard-2-e1492618718611.png"/>
                </IconButton>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon style={{ fontSize: 60  }}/>
                </IconButton>
            </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}