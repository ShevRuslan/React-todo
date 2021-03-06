import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
        },
    },
  });


class AppNavbar extends Component {
  searchItem = (e) => {
    const { onSearch } = this.props;
    onSearch(e.target.value);
  }
  render() {
      const { classes } = this.props;
      return (
          <div className={classes.root}>
          <AppBar
            position="static"
            color='primary'
          >
              <Toolbar>
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
                noWrap
              >
                  React-todo
              </Typography>
              <div className={classes.grow} />
              <div className={classes.search}>
                  <div className={classes.searchIcon}>
                      <SearchIcon />
                  </div>
                <InputBase
                  onChange={this.searchItem}
                  placeholder="Поиск"
                  classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                  }}
                  />
              </div>
              </Toolbar>
          </AppBar>
          </div>
      );
  }
}

export default withStyles(styles)(AppNavbar);