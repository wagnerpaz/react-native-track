import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';

import Spacer from '../components/Spacer';
import SigninScreen from './SigninScreen';

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer><Text h3>Sign Up for Tracker</Text></Spacer>
            <Spacer>
                <Input
                    label="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Input
                    label="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                />
            </Spacer>
            <Spacer><Button title="Sign Up"/></Spacer>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: null,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 80,
    }
});

export default SignupScreen;