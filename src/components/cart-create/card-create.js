import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import './card-create.css'

const styles = theme => ({
    card: {
        padding: '15px',
        marginTop: '30px',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        width: '100%',
    },
    input: {
        margin: theme.spacing.unit,
        width: '100%',
        marginTop: '20px'
    },
    button: {
        width: '100%',
        marginTop: '30px',
        textAlign: 'center'
    }
});

class CartCreate extends Component {
    render () {

        const { classes } = this.props;

        return (
            <div className="wrapper-form">
                <Card className={classes.card}>
                    <Typography variant="h4" >
                        Создать записку
                    </Typography>
                    <form className={classes.form}>
                        <Input
                            placeholder="Заголовок"
                            className={classes.input}
                            inputProps={{
                            'aria-label': 'Description',
                            }}
                        />
                        <Input
                            placeholder="Текст"
                            className={classes.input}
                            inputProps={{
                            'aria-label': 'Description',
                            }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            type="submit">
                            Создать записку
                        </Button>
                    </form>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(CartCreate);