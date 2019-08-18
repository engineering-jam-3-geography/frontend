/**
 * Fixes leading slash in pathname
 * @param {Object} props
 * @returns {Object}
 */
const fixPathname = (props = {}) => {
    const {pathname = ''} = props;
    const newPathname = (pathname.substring(0, 1) === '/')
        ? `${pathname}`
        : `/${pathname}`;

    return {
        ...props,
        pathname: newPathname
    };
};

export default fixPathname;
