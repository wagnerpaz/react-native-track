import {useState, useEffect} from 'react';
import {Accuracy, requestPermissionsAsync, watchPositionAsync} from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            const subscriber = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10,
            }, callback);
            setSubscriber(subscriber);
        } catch(err) {
            setErr(err);
        }
    }

    useEffect(() => {
        if(shouldTrack) {
            startWatching();
        }
        else {
            subscriber != null ? subscriber.remove() : null;
            setSubscriber(null);
        }
    }, [shouldTrack]);
    
    return [err];
};