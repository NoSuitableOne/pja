import React, { Component } from 'react';
import propTypes from 'prop-types';
import logo from '../assets/logo.svg';

class Old extends Component {
    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

Old.propTypes = {};

Old.defaultProps = {};

export default Old;
