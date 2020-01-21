import React, {useContext} from 'react';
import {View, Text, Button, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import {NavigationEvents} from 'react-navigation';

import {Context as TrackContext} from '../context/TrackContext';
import { navigate } from '../navigationRef';

const TrackListScreen = ({navigation}) => {
    const {state: trackState, fetchTracks} = useContext(TrackContext);

    return (
        <View>
            <NavigationEvents onWillFocus={fetchTracks}/>
            <FlatList
                data={trackState}
                keyExtractor={track => track._id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('TrackDetail', {_id: item._id});
                        }}>
                            <ListItem chevron title={item.name}/>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

TrackListScreen.navigationOptions = {
    title: 'Tracks',
};

const styles = StyleSheet.create({});

export default TrackListScreen;