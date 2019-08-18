import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './index.scss';

class Input extends Component {
    componentDidMount() {
        const {autoFocus = false} = this.props;

        if (autoFocus) setTimeout(() => this.input.focus(), 100);
    }

    render() {
        const {
            value,
            name,
            onChange,
            onFocus,
            onBlur
        } = this.props;

        const componentClass = ClassNames({
            Input: true
        });

        return (
            <div className={componentClass}>
                <input
                    type="text"
                    value={value}
                    className="Input__input"
                    name={name}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    ref={(input) => { this.input = input; }} />
            </div>
        );
    }
}

Input.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};

export default Input;
