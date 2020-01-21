import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Text, Button} from 'react-native-elements';
import {FontAwesome} from '@expo/vector-icons';

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

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20}/>
}

const styles = StyleSheet.create({});

export default AccountScreen;