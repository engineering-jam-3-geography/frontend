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
    disableHeader,
    disableFooter,
    children
}) => (
    <div className="Layout">
        {!disableHeader && (
            <Header />
        )}

        <Main>
            {children}
        </Main>

        {!disableFooter && (
            <Footer />
        )}
    </div>
);

Layout.propTypes = {
    disableHeader: PropTypes.bool,
    disableFooter: PropTypes.bool,
    children: PropTypes.node
};

export default Layout;
