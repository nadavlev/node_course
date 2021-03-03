const geoCode = require('./utils/geoCode');
const forcast = require('./utils/forcast');

const address = process.argv[2];

geoCode(address, (error, {lat, long, placeName} = {}) => {
    if (!address) {
        console.log('NoAddress provided');
    }
    if (error) {
        return console.log(error);
    }
    forcast(lat, long, (err, {temperature:temp, feelsLike:feels} = {}) => {

        if (err) {
            return console.log(err);
        }

        console.log(`${placeName} => It is currently ${temp}, Feels like ${feels}`);
    })
});

