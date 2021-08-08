import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { Search } from './search';
import { Program } from './singleProgram';
import { PaginationComp } from './pagination';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        marginBottom: 10
    },
    results: {
        margin: 'auto',
        textAlign: 'right',
        [theme.breakpoints.down(600)]: {
            textAlign: 'left',
            marginTop: 10
        }
    }
}));

export const Content = (props) => {
    const classes = useStyles();
    const { programs } = props.programs;
    const pageLimit = 10;
    const [size, setSize] = useState(programs ? programs.length : pageLimit);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedData, setPaginated] = useState(programs);

    const setPaginatedData = (data) => {
        const start = (currentPage * pageLimit) - pageLimit;
        const end = start + pageLimit;
        const x = data.slice(start, end);
        console.log(currentPage);
        console.log(pageLimit);
        console.log(x);
        return x;
    }

    useEffect(() => {
        setPaginated(setPaginatedData(programs));
    }, [setPaginated, programs, currentPage]);

    const handleSearch = (value) => {
        const search = value.toLowerCase();

        var result = programs.filter(program => {
          var name = (program.name).toLowerCase(); 
          return name.includes(search)? program : null;
        });

        setPaginated(setPaginatedData(result));
        setSize(result.length);
    }

    return (
        <Container>
            {paginatedData &&
                <>
                    <Grid container className={classes.toolbar}>
                        <Grid item xs={12} sm={7} md={9}>
                            <Search onChange={handleSearch}/>
                        </Grid>
                        <Grid item xs={12} sm={5} md={3} className={classes.results}>
                            <Typography>Showing {size} results</Typography>
                        </Grid>
                    </Grid>

                    {paginatedData.map((row, i) => (
                        <Program key={i} program={row} />
                    ))}
                </>
            }

            <PaginationComp currentPage={currentPage} setPage={setCurrentPage} size={size} limit={pageLimit} />
        </Container>
    );
}