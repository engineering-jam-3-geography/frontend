import React from 'react';
import PropTypes from 'prop-types';

import Question from './question.component';
import './component.scss';

const CardForm = ({description, questions, onSubmit, onChange}) => (
    <form className="form">
        <div className="taskHead">
            <span>Задание</span>
            <span>{description}</span>
        </div>
        {questions.map(({title, options, type}) =>
            (<Question
                title={title}
                options={options}
                type={type}
                onChange={onChange}
            />))
        }
        <input type="button" className="button" value="Ответить на вопрос" onClick={onSubmit} />
    
    </form>);

export default CardForm;
