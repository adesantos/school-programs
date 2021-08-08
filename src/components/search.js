import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    wrap: {
        width: '70%',
        position: 'relative',
        "& > i": {
            top: 12,
            color: '#6f6f6f',
            position: 'absolute',
            "&.fa-search": {
                float: 'left',
                left: 10
            },
            "&.fa-microphone": {
                float: 'right',
                right: 10
            }
        },
        [theme.breakpoints.down(959)]: {
            width: '100%'
        }
    },
    search: {
        width: '100%',
        height: 40,
        border: 'none',
        paddingLeft: 30,
        backgroundColor: '#F2F2F2',
        "&:focus-visible": {
            outline: 'none'
        }
    }
}));

export const Search = ({onChange}) => {
    const classes = useStyles();

    const handleChange = (e) => {

        onChange(e.target.value);
    }

    return(
        <div className={classes.wrap}>
            <i className="fas fa-search"></i>
            <input className={classes.search} onChange={handleChange} />
            <i className="fas fa-microphone"></i>
        </div>
    );
}