import React from 'react';
import PropTypes from 'prop-types';

const Question = ({title, options, type, onChange}) => (
    <div className="Question">
        <div className="Question__title">{title}</div>

        <div className="Question__options">
            {options.map(({value}, index) => (
                <label key={index} className="Question__option">
                    <div className="Question__input">
                        <input type={type} value={value} name="question" onChange={onChange} />
                    </div>

                    <div className="Question__text">{value}</div>
                </label>
            ))}
        </div>
    </div>
);

Question.propTypes = {
    title: PropTypes.string,
    options: PropTypes.array,
    type: PropTypes.string,
    onChange: PropTypes.func,
    markup: PropTypes.string
};

export default Question;
