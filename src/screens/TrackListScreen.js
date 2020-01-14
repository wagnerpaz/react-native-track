import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const TrackListScreen = ({navigation}) => {
    return (
        <View>
            <Text>TrackListScreen</Text>
            <Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetail')}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default TrackListScreen;