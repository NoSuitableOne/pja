import React, { Component } from 'react';
import { connect } from 'react-redux';
import TestComp from '../components/Test.comp';
import { GET_HELLO } from '../actions/allActions';

class Test extends Component {
    render() {
        const {name, handleClick} = this.props;
        return (
            <div>
                <TestComp name={name} handleClick={handleClick}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        name: state.hello.name,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {dispatch(GET_HELLO())}
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Test);


