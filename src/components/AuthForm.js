import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({headerText, submitButtonText, errorMsg, onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer><Text h3>{headerText}</Text></Spacer>
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
            <Spacer><Button title={submitButtonText} onPress={() => onSubmit({email, password})}/></Spacer>
            {errorMsg ? (
                <Text style={styles.errorMsg}>{errorMsg}</Text>
            ): null}
        </>
    );
};

const styles = StyleSheet.create({
    errorMsg: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
    },
});

export default AuthForm;