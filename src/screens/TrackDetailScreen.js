import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';

import {Context as TrackContext} from '../context/TrackContext';

const TrackDetailScreen = ({navigation}) => {
    const _id = navigation.getParam('_id');
    const {state} = useContext(TrackContext);

    const track = state.find(track => track._id === _id);
    const initialCoords = track.locations[0].coords;

    return (
        <View>
            <Text>{track.name}</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords,
                }}
            >
                <Polyline coordinates={track.locations.map(l => l.coords)}/>
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    }
});

export default TrackDetailScreen;