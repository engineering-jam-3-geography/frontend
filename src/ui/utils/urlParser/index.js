import flow from 'lodash/flow';
import parse from './modules/parse';
import fixPathname from './modules/fixPathname';

/**
 * Parses url
 */
const urlParser = flow(
    parse,
    fixPathname
);

export default urlParser;
