import React from 'react';
import Layout from '../../components/Layout';
import Intro from '../../components/Intro';

/**
 * Renders main page
 * @returns {JSX}
 */
const MainPage = () => (
    <Layout
        disableHeader
        disableFooter>
        <Intro />
    </Layout>
);

export default MainPage;
