import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { Old, Test } from './containers/AllContainers';
import { GET_HELLO } from './actions/allActions';

import { store } from './store';

class App extends Component {
    componentWillMount() {
        console.log(store.getState());
    }

    render() {
        const {name, handleClick} = this.props;
        return (
            <div>
                <Old />
                <Route path="/test" component={Test} >
                    {this.props.children}
                </Route>
                <hr />
                <Test name={name} handleClick={handleClick} />
            </div>
        );
    }

    componentDidMount() {
        console.log(store.getState());
    }
}

function mapStateToProps(state) {
    return {
        name: state.hello.name
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: dispatch(GET_HELLO)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
