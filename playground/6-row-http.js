const http = require('http');

const lat = 32;
const long = 42;
const url = `http://api.weatherstack.com/current?access_key=ef458b13f1254ec799377c4b4bfc5ed5&query=${lat},${long}&units=m`

const request = http.request(url, response => {
    let data = '';
    response.on('data', chunk => {
        data = data + chunk.toString();
    })

    response.on('end', () => {
        console.log(JSON.parse(data));
    })
});

request.on('error', err => {
    console.log(err);
})

request.end();
