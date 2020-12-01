const request = require('request')

const forecast = (latitutde, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d9f96e03fd30f3e08514ec5a24f7d24e&query=' + latitutde + ',' + longitude + '&units=m'

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to contact weather services', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out.  It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast