import React from 'react';
import MenuDrawer from './MenuDrawer';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => { setOpen(true) };

    //const wrapper = React.useRef();
    //const MenuDrawerRef = React.forwardRef((props, ref) => {
    //    return (
    //        <MenuDrawer ref={ref} {...props} />
    //    )
    //});

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense" color="inherit">
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerOpen}>
                        <MenuIcon />
                        <Typography variant="h6" className={classes.title}>Online Information</Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <MenuDrawer open={open} setOpen={setOpen} />
        </div>
    );
}