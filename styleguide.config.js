const path = require('path');

module.exports = {
    components: 'src/ui/components/**/*.js',
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/styleguide/Wrapper')
    },
    ignore: [
        '**/__tests__/**',
        '**/*.test.js',
        '**/*.spec.js',
        '**/*.d.ts'
    ],
    require: [
        path.join(__dirname, 'src/styleguide/Wrapper/index.css'),
    ]
};
