import React from 'react';
import PropTypes from 'prop-types';

import Question from './question.component';
import BigButton from '../BigButton';
import './component.scss';

const CardForm = ({title, description, questions, onSubmit, onChange}) => (
    <form className="CardForm">
        <div className="CardForm__header">
            <div className="CardForm__title">
                {title}
            </div>
        </div>

        <div className="CardForm__content">
            <div className="CardForm__contentInner">
                <div className="CardForm__description">{description}</div>

                <div className="CardForm__questions">
                    {questions && questions.map(({title: qTitle, options, type}, idx) =>
                        (<Question
                            key={idx}
                            title={qTitle}
                            options={options}
                            type={type}
                            onChange={onChange} />))}
                </div>

                <div className="CardForm__button">
                    <BigButton
                        text="Следующий вопрос"
                        onClick={onSubmit} />
                </div>
            </div>
        </div>
    </form>);

CardForm.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    questions: PropTypes.array,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func
};

export default CardForm;
