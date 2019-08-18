import urlParser from '../urlParser';

/**
 * Push item to history state
 * @param {Object} props
 */
const redirect = (props = {}) => {
    const {history = {}, link = ''} = props;

    if (typeof history.push !== 'function') {
        return;
    }

    const parser = urlParser(link);
    const {pathname = ''} = parser;

    history.push(pathname);
};

export default redirect;
