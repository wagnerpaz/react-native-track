import mockLocation from '../_mockLocation';

import React, {useState, useEffect, useContext, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import {Text} from 'react-native-elements';
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location';


import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({isFocused}) => {
    const {state: {recording, initialLocation, locations}, addLocation} = useContext(LocationContext);

    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording]);

    const [err] = useLocation(isFocused || recording, callback);
    
    useEffect(() => {
        if(initialLocation) {
            mockLocation(initialLocation.coords);
        }
    }, [initialLocation]);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h3>Track Create Screen</Text>
            <Map/>
            {err ?
                <Text>Please enable location services.</Text>
            : null}
            <TrackForm/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);