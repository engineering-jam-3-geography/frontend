import React from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import {connect} from 'react-redux';
import {showPasswordModal, hidePasswordModal} from '../../../redux/actions/modals';

const ExampleOfConnectedComponent = ({
    isHidden,
    onShow,
    onHide
}) => (
    <div className="ExampleOfConnectedComponent">
        {isHidden && (
            <div className="ExampleOfConnectedComponent__button">
                <button type="button" onClick={onShow}>Show password modal</button>
            </div>
        )}

        {!isHidden && (
            <div className="ExampleOfConnectedComponent__button">
                <button type="button" onClick={onHide}>Hide password modal</button>
            </div>
        )}

        {!isHidden && (
            <div className="ExampleOfConnectedComponent__modal">
                HERE GOES PASSWORD MODAL
            </div>
        )}
    </div>
);

ExampleOfConnectedComponent.propTypes = {
    isHidden: PropTypes.bool,
    onShow: PropTypes.func,
    onHide: PropTypes.func
};

export default flow(
    connect(
        (state) => ({
            isHidden: state.modals.passwordModal.isHidden
        }),
        (dispatch) => ({
            onShow: () => dispatch(showPasswordModal()),
            onHide: () => dispatch(hidePasswordModal())
        })
    )
)(ExampleOfConnectedComponent);
