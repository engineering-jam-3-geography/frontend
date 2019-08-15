import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import {compose} from 'redux';
import Layout from './';

Enzyme.configure({adapter: new Adapter()});

describe('<Layout /> UI Component', () => {
    const shallowExpect = compose(expect, toJSON, shallow);

    test('Layout.', () => {
        shallowExpect(
            <Layout>
                <div>Here goes children!</div>
            </Layout>
        ).toMatchSnapshot();
    });
});

