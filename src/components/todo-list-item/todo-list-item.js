import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import MenuItem from '@material-ui/core/MenuItem';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    card: {
        width: '100%',
        padding: '15px',
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '120px',
        maxHeight: 'auto',
        position: 'relative',
    },
    menu: {
        padding: '15px'
    },
    p: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif;',
        width: '100%',
        textAlight: 'left',
        paddingTop: '15px'
    },
    div: {
        position: 'absolute',
        left: '5px',
        top: '5px'
    },
    Done: {
        backgroundColor: '#00c853 !important',
        '&:hover': {
            backgroundColor: '#00c853'
        }, 
    },
    notDone: {
        backgroundColor: '#f44336 !important',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#f44336'
        },
    },
    delete: {
        backgroundColor: '#b71c1c !important',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#b71c1c'
        },
    },
});

class TodoListItem extends Component {
    state = {
        anchorEl: null,
    };
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    render () {

        const { classes, name, text, done, onDone, onNotDone, onDelete  } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        let styleDone = null;
        if (done) { styleDone = {boxShadow: '0px 1px 3px 0px rgba(0, 200, 83, 0.5), 0px 1px 1px 0px rgba(0, 200, 83, 0.4), 0px 2px 1px -1px rgba(0, 200, 83, 0.4)'} }
        else if(done === false) { styleDone = { boxShadow: '0px 1px 3px 0px rgba(244, 67, 54,0.5), 0px 1px 1px 0px rgba(244, 67, 54,0.4), 0px 2px 1px -1px rgba(244, 67, 54,0.4)' } }
        return (
            
            <Card style={styleDone} className={classes.card}>
                <div className={classes.div}>
                    <Button
                        color='primary'
                        variant="contained"
                        aria-owns={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        >
                        <SvgIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                        </SvgIcon>
                    </Button>
                    <Menu
                        className={classes.menu}
                        id="fade-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={this.handleClose}
                        TransitionComponent={Fade}
                        >
                        <MenuItem
                            selected
                            onClick={() => { onDone(); this.handleClose() }}
                            className={classes.Done}
                        >Выполнено</MenuItem>
                        <MenuItem
                            onClick={() => { onNotDone(); this.handleClose() }}
                            className={classes.notDone}
                        >Невыполнено</MenuItem>
                        <MenuItem
                            onClick={() => { onDelete(); this.handleClose() }}
                            className={classes.delete}
                        >Удалить</MenuItem>
                    </Menu>
                </div>
                <Typography variant="h6">{name}</Typography>
                <p className={classes.p} >{text}</p>
            </Card>
        )
    }
}

export default withStyles(styles)(TodoListItem);