import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import {compose} from 'redux';
import SpriteIcon from '.';

Enzyme.configure({adapter: new Adapter()});

describe('<SpriteIcon /> UI Component', () => {
    const shallowExpect = compose(expect, toJSON, shallow);

    test('SpriteIcon.', () => {
        shallowExpect(
            <SpriteIcon iconLink="#ico-about-us" />
        ).toMatchSnapshot();
    });

    test('SpriteIcon with size.', () => {
        shallowExpect(
            <SpriteIcon width="50" height="50" iconLink="#ico-about-us" />
        ).toMatchSnapshot();
    });

    test('SpriteIcon with className.', () => {
        shallowExpect(
            <SpriteIcon width="50" height="50" iconLink="#ico-about-us" className="icon" />
        ).toMatchSnapshot();
    });
});
