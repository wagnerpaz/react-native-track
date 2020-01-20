import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.00001;

export default (initialCoord = {longitude: 0, latitude: 0}) => {
    const getLocation = (increment) => {
        return {
            timestamp: 10000000,
            coords: {
                speed: 0,
                heading: 0,
                accuracy: 5,
                altitudeAccuracy: 5,
                altitude: 5,
                longitude: initialCoord.longitude + increment * tenMetersWithDegrees,
                latitude: initialCoord.latitude + increment * tenMetersWithDegrees,

            }
        };
    };

    let counter = 0;

    setInterval(() => {
        Location.EventEmitter.emit('Expo.locationChanged', {
            watchId: Location._getCurrentWatchId(),
            location: getLocation(counter++)
        });
    });
};