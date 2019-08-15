import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

import '../../assets/sass/main.scss';
import './index.scss';

/**
 * Renders page Layout
 * @param {Object}
 * @return {JSX}
 */
const Layout = ({
    children
}) => (
    <div className="Layout">
        <Header />

        <Main>
            {children}
        </Main>

        <Footer />
    </div>
);

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
