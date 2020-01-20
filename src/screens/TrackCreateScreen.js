import mockLocation from '../_mockLocation';

import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import {Text} from 'react-native-elements';
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location';

import Map from '../components/Map';

import {Context as LocationContext} from '../context/LocationContext';

import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({isFocused}) => {
    const {state: locationState, addLocation} = useContext(LocationContext);
    
    const [err] = useLocation(isFocused, (location) => {
        addLocation(location);
    });
    
    useEffect(() => {
        if(locationState.initialLocation) {
            mockLocation(locationState.initialLocation.coords);
        }
    }, [locationState.initialLocation]);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h3>Track Create Screen</Text>
            <Map/>
            {err ?
                <Text>Please enable location services.</Text>
            : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);