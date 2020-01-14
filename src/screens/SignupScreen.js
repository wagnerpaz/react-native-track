import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SignupScreen = ({navigation}) => {
    return (
        <View>
            <Text>SignupScreen</Text>
            <Button title="Go to Sign In" onPress={() => navigation.navigate('Signin')}/>
            <Button title="Go to Main Flow" onPress={() => navigation.navigate('mainFlow')}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SignupScreen;