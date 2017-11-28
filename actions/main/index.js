getCurrentLocation =  () => {
    return {
        type:'getCurrentLocation'
    }
}
setCurrentLocation =  (latitude,longitude) => {
    return {
        type:'setCurrentLocation',
        latitude,longitude
    }
}
export {getCurrentLocation,setCurrentLocation}