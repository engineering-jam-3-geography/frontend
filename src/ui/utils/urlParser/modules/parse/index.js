/**
 * Parses url
 * @param {String} url
 * @param {Object} doc
 * @returns {Object}
 */
const parse = (url = '', doc = document) => {
    const parser = doc.createElement('a');

    parser.href = url;

    // IE doesn't populate all link properties when setting .href with a relative URL,
    // however .href will return an absolute URL which then can be used on itself
    // to populate these additional fields.
    if (parser.host === '') {
        parser.href = parser.href;
    }

    const {
        href = '',
        hostname = '',
        pathname = '',
        protocol = '',
        search = ''
    } = parser;

    return {
        url,
        href,
        hostname,
        pathname,
        protocol,
        search
    };
};

export default parse;
