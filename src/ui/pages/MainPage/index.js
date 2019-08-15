import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout';
import SpriteIcon from '../../components/SpriteIcon';
import ExampleOfConnectedComponent from '../../components/ExampleOfConnectedComponent';
import img from '../../assets/img/preview.png';
import svgImg from '../../assets/svg/file/ico-facebook.svg';

/**
 * Renders main page
 * @returns {JSX}
 */
const MainPage = () => (
    <Layout>
        <h1>This main page!</h1>

        <br />

        <h3>This is example of link to another page</h3>

        <Link to="/about">About page</Link>

        <br />
        <br />

        <h3>This is example of image</h3>

        <img src={img} width="400" height="200" />

        <br />

        <h3>This is example of svg sprite image</h3>

        <SpriteIcon
            iconLink="#ico-youtube" />

        <br />
        <br />

        <h3>This is example of svg file</h3>

        <img src={svgImg} width="400" height="200" />

        <br />

        <h3>This example of connected component</h3>

        <ExampleOfConnectedComponent />

        <br />
    </Layout>
);

export default MainPage;
