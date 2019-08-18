import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

const Question = ({title, options, type, onChange}) => (
    <div className="Question">
        <div className="Question__title">{title}</div>

        <div className="Question__options">
            {options.map(({value}, index) => {
                const id = uuidv4();

                return (
                    <label key={index} className="Question__option" htmlFor={id}>
                        <div className="Question__input">
                            <input type={type} value={value} id={id} name="question" onChange={onChange} />
                        </div>

                        <div className="Question__text">{value}</div>
                    </label>
                );
            })}
        </div>
    </div>
);

Question.propTypes = {
    title: PropTypes.string,
    options: PropTypes.array,
    type: PropTypes.string,
    onChange: PropTypes.func
};

export default Question;
