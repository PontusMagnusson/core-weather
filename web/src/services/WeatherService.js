   
export function fetchWeatherByCoordinates(latitude, longitude, callback) {
    
    console.log(`Fetching weather for coordinates [${latitude}, ${longitude}]`)
    
    fetch(`http://127.0.0.1:5000/api/weather/${latitude},${longitude}`) // Not going to host this anywhere so this is good enough for now
    .then((resp) => {
        return resp.json()
    })
    .then((data) => {
        callback(undefined, data)
    })
    .catch((err) => {
        callback(err, undefined)
    })
}

export function fetchWeatherByLocation(location, callback) {

    console.log(`Fetching weather for location ${location}`)
    
    location = location.replace(',', ' ') // replace commas with spaces to not collide with the other endpoint
    location = location.replace('/', ' ')

    fetch(`http://127.0.0.1:5000/api/weather/${encodeURIComponent(location)}`)
    .then((resp) => {
        return resp.json()
    })
    .then((data) => {
        callback(undefined, data)
    })
    .catch((err) => {
        callback(err, undefined)
    })
}