import React from 'react';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: 190,
        marginBottom: 20,
        padding: '20px 25px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    name: {
        fontSize: 20,
        marginBottom: 15,
        lineHeight: '23px'
    },
    text: {
        fontSize: 18,
        marginBottom: 15,
        lineHeight: '21px',
        color: 'rgba(0, 0, 0, 0.8)'
    },
    actions: {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    link: {
        color: '#000',
        fontSize: 18,
        cursor: 'pointer',
        lineHeight: '21px',
        marginBottom: 30,
        [theme.breakpoints.down(600)]: {
            marginTop: 15,
            marginBottom: 15
        }
    },
    buttons: {
        height: 47,
        width: 157,
        fontSize: 18,
        color: '#FFF',
        margin: '0 auto',
        borderRadius: 5,
        lineHeight: '21px',
        padding: '8px 35px',
        background: '#000',
        textTransform: 'capitalize',
        "&:hover":{
            backgroundColor: '#383838'
        },
        [theme.breakpoints.down(600)]: {
            marginTop: 15
        }
    }
}));

export const Program = ({ program }) => {
    const classes = useStyles();

    const getDate = (date) => {
        const newDate = moment(date).format('ddd, MMM d, YYYY');
        return newDate.toString();
    }

    return (
        program &&
        <Grid container className={classes.container}>
            <Grid item xs={12} sm={8} md={9}>
                <Typography className={classes.name}>{program.name}</Typography>
                <Typography className={classes.text}>Grades {program.grade}</Typography>
                <Typography className={classes.text}>{getDate(program.date_begin)} - {getDate(program.date_end)}</Typography>
                <Typography className={classes.text}><i className="fas fa-map-marker-alt"></i> {program.location}</Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={3} className={classes.actions}>
                <Button className={classes.buttons}>Register</Button>
                <Link className={classes.link}>Learn More</Link>
            </Grid>
        </Grid>
    );
}