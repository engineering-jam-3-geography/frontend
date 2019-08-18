const basename = '/user/';

module.exports = {
    api: {
        headers: {
            'Content-Type': 'application/json'
        },
        host: (process.env.NODE_ENV === 'production') ? '' : 'http://localhost:3000',
        endpoints: {
            submit: '/submit'
        }
    },
    root: 'root',
    basename
};
