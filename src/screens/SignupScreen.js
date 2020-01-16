import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Text} from 'react-native-elements';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

import {Context as AuthContext} from '../context/AuthContext';

const SignupScreen = ({navigation}) => {
    const {state: authState, signup, clearErrorMsg} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMsg}/>
            <AuthForm
                headerText="Sign Up for Tracker"
                submitButtonText="Sign Up"
                errorMsg={authState.errorMsg}
                onSubmit={signup}
            />
            <NavLink
                text="Already have an account? Sign In instead."
                routeName="Signin"
            />
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
    },
});

export default SignupScreen;