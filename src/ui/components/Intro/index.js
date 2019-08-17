import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import flow from 'lodash/flow';
import {connect} from 'react-redux';
import Classnames from 'classnames';
import SpriteIcon from '../SpriteIcon';
import bgImage from '../../assets/img/bg-intro.jpg';
import bgIcons from '../../assets/svg/file/bg-icons.svg';
import monsterImage from '../../assets/svg/file/vis-monstr.svg';
import './index.scss';

const Intro = ({
    lessonUrl
}) => {
    const links = [
        {title: '1', url: `/task/${lessonUrl}`, isActive: true},
        {title: '2', url: '', isActive: false},
        {title: '3', url: '', isActive: false},
        {title: '4', url: '', isActive: false},
        {title: '5', url: '', isActive: false},
        {title: '6', url: '', isActive: false},
        {title: '7', url: '', isActive: false},
        {title: '8', url: '', isActive: false},
        {title: '9', url: '', isActive: false},
        {title: '10', url: '', isActive: false},
        {title: '11', url: '', isActive: false},
        {title: '12', url: '', isActive: false}
    ];

    return (
        <section className="Intro" style={{backgroundImage: `url(${bgImage})`}}>
            <div className="Intro__wrapper">
                <div className="Intro__header">
                    <div className="Intro__title">
                        Выберите урок
                    </div>

                    <div className="Intro__monster">
                        <img src={monsterImage} alt="monster" />
                    </div>
                </div>

                <div className="Intro__content">
                    <div className="Intro__contentInner" style={{backgroundImage: `url(${bgIcons})`}}>
                        <div className="Intro__list">
                            {
                                links.map((item, idx) => {
                                    const {title, url, isActive} = item;
                                    const itemClass = Classnames({
                                        Intro__listItem: true,
                                        Intro__listItem_state_disabled: !isActive,
                                        [`Intro__listItem_${idx}`]: true
                                    });

                                    return (
                                        <div key={idx} className={itemClass}>
                                            <Link to={url}>
                                                <div className="Intro__button">
                                                    <div className="Intro__buttonIcon">
                                                        <SpriteIcon
                                                            iconLink={`#${isActive ? 'ico-btn-activ' : 'ico-btn-notactiv'}`} />
                                                    </div>

                                                    <div className="Intro__buttonText">{title}</div>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Intro.propTypes = {
    lessonUrl: PropTypes.string
};

export default flow(
    connect(
        (state) => ({
            lessonUrl: state.tasks.list[0].id
        }),
        null
    )
)(Intro);
