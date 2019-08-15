import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * Renders Main component
 * @param {Object}
 * @returns {JSX}
 */
const Main = ({
    children
}) => {
    const mainClass = ClassNames({
        Main: true
    });

    return (
        <main className={mainClass}>
            {children}
        </main>
    );
};

Main.propTypes = {
    children: PropTypes.node
};

export default Main;
