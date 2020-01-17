import React, {useContext} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';

import {Context as LocationContext} from '../context/LocationContext';

const Map = () => {
    const {state: {currentLocation}} = useContext(LocationContext);

    if(!currentLocation) {
        return <ActivityIndicator size="large" style={{marginTop: 200}}/>;
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
            }}
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
            }}
        >
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
});

export default Map;