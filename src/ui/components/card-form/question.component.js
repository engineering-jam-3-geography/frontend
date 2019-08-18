import React from 'react';
import PropTypes from 'prop-types';

const Question = ({title, options, type, onChange, markup}) => (
    <React.Fragment>
        <span>{title}</span>
        {options.map(({value}, index) =>
            (
                <label key={index} for="kek">
                    <input type={type} value={value} name="kek" onChange={onChange} />
                    {value}
                </label>
            )
        )}
    </React.Fragment>
);

export default Question;
