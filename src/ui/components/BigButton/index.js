import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import './index.scss';
import bgIcon from '../../assets/svg/file/bg-cta.svg';

const BigButton = ({
    text,
    onClick
}) => {
    const componentClass = Classnames({
        BigButton: true
    });

    return (
        <button
            type="button"
            className={componentClass}
            onClick={onClick}>
            <div className="BigButton__background" style={{backgroundImage: `url(${bgIcon})`}} />

            <div className="BigButton__text">{text}</div>
        </button>
    );
};

BigButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
};

export default BigButton;
