import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

export default function MenuDrawer(props) {

    const classes = useStyles();
    const toggleDrawer = (isOpen) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        props.setOpen(isOpen);
    }

    return (
        <Drawer
            anchor="left"
            open={props.open}
            onClose={toggleDrawer(false)}
            classes={{
                paper: classes.drawerPaper,
            }}>
            <div className={classes.drawerHeader}>
                <IconButton onClick={toggleDrawer(false)}>
                    {<ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem button component={Link} to="/calendar" onClick={toggleDrawer(false)} >
                    <ListItemIcon>{<CalendarViewDayIcon />}</ListItemIcon>
                    <ListItemText primary='Calendar' />
                </ListItem>
            </List>
        </Drawer>
    );
}