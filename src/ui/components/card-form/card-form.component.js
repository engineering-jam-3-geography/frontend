import React from 'react';
import PropTypes from 'prop-types';

import Question from './question.component';
import './component.scss';

const CardForm = ({description, questions, onSubmit, onChange}) => (
    <form className="CardForm">
        <div className="CardForm__header">
            <div className="CardForm__title">
                Задание
            </div>
        </div>

        <div className="CardForm__content">
            <div className="CardForm__contentInner">
                <div className="CardForm__description">{description}</div>

                <div className="CardForm__questions">
                    {questions && questions.map(({title, options, type}) =>
                        (<Question
                            title={title}
                            options={options}
                            type={type}
                            onChange={onChange} />))}
                </div>
            </div>
        </div>

        <input type="button" className="button" value="Ответить на вопрос" onClick={onSubmit} />
    </form>);

CardForm.propTypes = {
    description: PropTypes.string,
    questions: PropTypes.array,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func
};

export default CardForm;
