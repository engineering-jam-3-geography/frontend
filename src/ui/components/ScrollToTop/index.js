import {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Scrolls the page to top after navigation
 */
class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

ScrollToTop.propTypes = {
    location: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
};

export default withRouter(ScrollToTop);
