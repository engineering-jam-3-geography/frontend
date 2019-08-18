import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import './index.scss';

const Button = ({
    text,
    disabled,
    onClick
}) => {
    const componentClass = Classnames({
        Button: true,
        Button_state_disabled: disabled
    });

    return (
        <button
            type="button"
            className={componentClass}
            onClick={onClick}
            disabled={disabled}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

export default Button;
