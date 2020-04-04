import React from 'react';
import Particles from 'react-particles-js';
import Navbar from './Navbar';
import Header from './Header';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    particleCanva: {
        position: 'absolute',
        opacity: 0.3,
    },
});

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Header />
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 45,
                            density: {
                                enable: true,
                                value_area: 900,
                            },
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 1,
                                color: 'tomato',
                            },
                        },
                        size: {
                            value: 8,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 6,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true,
                            },
                        },
                    },
                }}
                canvasClassName={classes.particleCanva}
            />
        </>
    );
};

export default Home;
