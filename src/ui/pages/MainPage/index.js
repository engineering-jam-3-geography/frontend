import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout';

/**
 * Renders main page
 * @returns {JSX}
 */
const MainPage = () => (
    <Layout>
        <h1>This main page!</h1>

        <Link to="/task/1">Go to Topic 1</Link>
    </Layout>
);

export default MainPage;
