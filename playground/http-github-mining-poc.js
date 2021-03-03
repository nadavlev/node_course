const axios = require('axios');
const {parse} = require('node-html-parser');

axios.get('https://github.com/nadavlev/?tab=repositories').then(response => {
    console.log(response);
    const root = parse(response.data);
}, error => {
    console.error(error);
});
