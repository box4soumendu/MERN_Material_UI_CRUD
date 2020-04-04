import React from 'react';
import { Typography, Box } from '@material-ui/core';

import Navbar from './Navbar';

function Resume() {
    return (
        <>
            <Navbar />
            <Box component='header'>
                <Typography variant='h4' align='center'>
                    working experience
                </Typography>
                <Box component='div'>
                    <Typography variant='h3'>2013</Typography>
                </Box>
            </Box>
        </>
    );
}

export default Resume;
