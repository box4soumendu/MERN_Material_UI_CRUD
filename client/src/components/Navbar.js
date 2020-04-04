import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';

import {
    AppBar,
    Toolbar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Avatar,
    Divider,
    Typography,
    Box,
} from '@material-ui/core';

import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
} from '@material-ui/icons';

import avatar from '../avatar.png';

//CSS styles
const useStyle = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#511',
        height: '100%',
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem: {
        color: 'tan',
    },
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Home',
        listPath: '/',
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Resume',
        listPath: '/resume',
    },
    {
        listIcon: <Apps />,
        listText: 'Portfollio',
        listPath: '/portfollio',
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contact',
        listPath: '/contact',
    },
];

const Navbar = () => {
    const [state, setState] = useState({ right: false });

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open });
    };

    const classes = useStyle();

    const sideList = slider => (
        <Box
            component='div'
            className={classes.menuSliderContainer}
            onClick={toggleSlider('right', false)}
        >
            <Avatar
                src={avatar}
                alt='Soumendu'
                className={classes.avatar}
            ></Avatar>
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem
                        button
                        key={key}
                        component={Link}
                        to={lsItem.listPath}
                    >
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText
                            primary={lsItem.listText}
                            className={classes.listItem}
                        ></ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Box component='nav'>
                <AppBar position='static' style={{ background: '#222' }}>
                    <Toolbar>
                        <IconButton
                            style={{ color: 'tomato' }}
                            onClick={toggleSlider('right', true)}
                        >
                            <ArrowBack />
                        </IconButton>
                        <Typography variant='h5' style={{ color: 'tan' }}>
                            Portfollio
                        </Typography>
                        <MobileRightMenuSlider
                            open={state.right}
                            anchor='right'
                            onClose={toggleSlider('right', false)}
                        >
                            {sideList('right')}
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;
