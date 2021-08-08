import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
            justifyContent: "center",
            display: 'flex'
        },
        "& li:first-child, li:last-child": {
            borderRadius: 7,
            border: '1px solid #ccc'
        },
        "& .Mui-selected": {
            fontWeight: 600,
            backgroundColor: 'transparent',
            "&:hover": {
                cursor: 'inherit',
                backgroundColor: 'transparent'
            }
        },
        "& .Mui-selected.Mui-focusVisible": {
            backgroundColor: 'transparent',
            "&:focus-visible": {
                backgroundColor: 'transparent'
            }
        },
        "& .MuiPaginationItem-page:not(.Mui-selected):hover": {
            textDecoration: 'underline',
            backgroundColor: 'transparent',
        }
    }
}));

export const PaginationComp = ({ currentPage, setPage, size, limit }) => {
    const lastPage = Math.ceil(size / limit);
    const classes = useStyles();

    const handleChange = (event, value) => {
        setPage(value);
    }

    return (
        <div className={classes.root}>
            <Pagination classes={{ button: classes.button }} count={lastPage} page={currentPage} onChange={handleChange} />
        </div>
    );
}