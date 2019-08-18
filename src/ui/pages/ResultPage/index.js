import React from 'react';
import Layout from '../../components/Layout';
import Result from '../../components/Result';

/**
 * Renders result page
 * @returns {JSX}
 */
const ResultPage = () => (
    <Layout
        disableHeader
        disableFooter>
        <Result />
    </Layout>
);

export default ResultPage;
