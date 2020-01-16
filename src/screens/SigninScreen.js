import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Text} from 'react-native-elements';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

import {Context as AuthContext} from '../context/AuthContext';

const SigninScreen = ({navigation}) => {
    const {state: authState, signin, clearErrorMsg} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMsg}/>
            <AuthForm
                headerText="Sign In for Tracker"
                submitButtonText="Sign In"
                errorMsg={authState.errorMsg}
                onSubmit={signin}
            />
            <NavLink
                text="Don't have an account? Sign Up instead."
                routeName="Signup"
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;