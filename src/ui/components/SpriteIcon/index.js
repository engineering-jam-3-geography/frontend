import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders SpriteIcon component
 * @param {Object}
 * @returns {JSX}
 */
const SpriteIcon = ({
    width,
    height,
    className,
    focusable,
    iconLink
}) => (
    <svg width={width} height={height} className={className} focusable={focusable.toString()}>
        <use xlinkHref={iconLink} />
    </svg>
);

SpriteIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
    focusable: PropTypes.bool,
    iconLink: PropTypes.string
};

SpriteIcon.defaultProps = {
    focusable: false
};

export default SpriteIcon;
