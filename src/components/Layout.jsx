import React from 'react';
import Grid from '@material-ui/core/Grid';
import OpenAPIAppBar from '../components/appBar/AppBar';

function Layout(props) {
    return (
        <>
            <Grid container >
                <Grid item xs={12} style={{ paddingBottom: 40 }}>
                    <OpenAPIAppBar />
                </Grid>
                <Grid item xs={12} >
                    {props.children}
                </Grid>
            </Grid>
        </>
    );
}
export default Layout;