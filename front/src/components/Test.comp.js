import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Test.module.css';

class Test extends Component {

    render () {
        const { name, handleClick } = this.props;
        return (
            <div>
                <h1 className={styles.hello}>
                    hello {name}
                </h1>
                <button onClick={handleClick}>click change name</button>
            </div>
        )
    };
}

Test.defaultProps = {};

Test.propTypes = {
    name: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
};

export default Test;