const path = require('path');

/**
 * Generates config for font
 * @param {Object} props
 * @return {Array}
 */
const generateConfig = (props = {}) => {
    const {font = {}, PATHS = {}} = props;
    const {name = '', styles = []} = font;

    return styles.map((style) => (
        {
            test: /\.(woff|woff2|ttf|eot|svg)$/,
            include: [
                path.join(PATHS.source, `/ui/assets/fonts/${name}/${style}`)
            ],
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        useRelativePath: true,
                        publicPath: `/fonts/${name}/${style}`
                    }
                }
            ]
        }
    ));
};

/**
 * Generate webpack config for fonts
 * @param {Object} props
 * @return {Array}
 */
const generateFontConfig = (props = {}) => {
    const {PATHS = {}, FONTS = [], generate = generateConfig} = props;

    return FONTS.reduce((accumulator, font) => {
        const fontConfig = generate({font, PATHS});

        return [...accumulator, ...fontConfig]
    }, []);
};

exports.generateConfig = generateConfig;
exports.generateFontConfig = generateFontConfig;
