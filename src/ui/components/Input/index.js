import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './index.scss';

const Input = ({
    name,
    onChange,
    onFocus,
    onBlur
}) => {
    const componentClass = ClassNames({
        Input: true
    });

    return (
        <div className={componentClass}>
            <input
                type="text"
                className="Input__input"
                name={name}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur} />
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};

export default Input;
