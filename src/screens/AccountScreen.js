import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Text, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';

import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = ({navigation}) => {
    const {signout} = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h3>AccountScreen</Text>
            <Button title="Sign Out" onPress={signout}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;