import {useState, useEffect} from 'react';
import {Accuracy, requestPermissionsAsync, watchPositionAsync} from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);

    useEffect(() => {
        let subscriber;

        const startWatching = async () => {
            try {
                await requestPermissionsAsync();
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10,
                }, callback);
                setSubscriber(subscriber);
            } catch(err) {
                setErr(err);
            }
        }

        if(shouldTrack) { 
            startWatching();
        }
        else {
            subscriber = subscriber != null ? subscriber.remove() : null;
        }

        return () => {
            subscriber = subscriber != null ? subscriber.remove() : null;
        };
    }, [shouldTrack, callback]);
    
    return [err];
};