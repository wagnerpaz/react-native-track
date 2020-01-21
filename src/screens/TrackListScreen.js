import React, {useContext} from 'react';
import {View, Text, Button, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import {NavigationEvents} from 'react-navigation';

import {Context as TrackContext} from '../context/TrackContext';

const TrackListScreen = ({navigation}) => {
    const {state: trackState, fetchTracks} = useContext(TrackContext);

    return (
        <View>
            <NavigationEvents onWillBlur={fetchTracks}/>
            <Text>TrackListScreen</Text>
            <FlatList
                data={trackState}
                keyExtractor={track => track._id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity>
                            <ListItem chevron title={item.name}/>
                        </TouchableOpacity>
                    );
                }}
            />
            <Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetail')}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default TrackListScreen;