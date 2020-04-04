import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './components/';
import Resume from './components/Resume';

function App() {
    return (
        <CssBaseline>
            <Route path='/' component={Home} exact />
            <Route path='/resume' component={Resume} />
        </CssBaseline>
    );
}

export default App;
