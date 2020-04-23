import React from 'react';
import { Get } from 'react-axios';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function Calender() {

    const url = '/shabbat/?cfg=json&geonameid=3448439&m=50'

    return (
        <div style={{ padding: 20 }}>
            <Get url={url}>
                {(error, response, isLoading, makeRequest, axios) => {
                    if (error) {
                        return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                    }
                    else if (isLoading) {
                        return (<div>Loading...</div>)
                    }
                    else if (response !== null) {
                        return (
                            <div>
                                {
                                    response.data.items ? (
                                        <>
                                            <Typography variant="h6">{response.data.title}</Typography>
                                            <TableContainer component={Paper}>
                                                <Table aria-labelledby="tableTitle" aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell><Typography variant="button">Category</Typography></TableCell>
                                                            <TableCell><Typography variant="button">Title</Typography></TableCell>
                                                            <TableCell><Typography variant="button">Date</Typography></TableCell>
                                                            <TableCell><Typography variant="button">Hebrew Date</Typography></TableCell>
                                                            <TableCell><Typography variant="button">Memo</Typography></TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {response.data.items.map((item, index) => (
                                                            <TableRow key={index}>
                                                                <TableCell component="th" scope="row">
                                                                    {item.category}
                                                                </TableCell>
                                                                <TableCell >{item.title}</TableCell>
                                                                <TableCell >{item.date}</TableCell>
                                                                <TableCell >{item.hebrew}</TableCell>
                                                                <TableCell >{item.memo}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </>)
                                        : ''
                                }
                                <button onClick={() => makeRequest({ params: { refresh: true } })}>Refresh</button></div>)
                    }
                    return (<div>Default message before request is made.</div>)
                }}
            </Get>
        </div>
    )
}