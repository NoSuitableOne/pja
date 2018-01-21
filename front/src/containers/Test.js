import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import TestComp from '../components/Test.comp';
import GET_HELLO from '../actions/hello';

class Test extends Component {

    render () {
        const { name, handleClick } = this.props;
        return (
            <div>
                <p>container test</p>
                <TestComp name={name} handleClick={handleClick} />
            </div>
        );
    }
}

Test.defaultProps = {};

Test.propTypes = {
    name: propTypes.string,
    handleClick: propTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        name: state.hello.name,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => dispatch(GET_HELLO)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Test);
