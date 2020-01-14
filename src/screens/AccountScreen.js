import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const AccountScreen = ({navigation}) => {
    return (
        <View>
            <Text>AccountScreen</Text>
            <Button title="Go to loginFlow" onPress={() => navigation.navigate('loginFlow')}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;