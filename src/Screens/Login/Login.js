//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';


// create a component
const Login = ({navigation}) => {

    const onLogin = () =>{
        actions.login(true)
    }
    return (
        <WrapperContainer>
        <View style={styles.container}>
            <ButtonComp 
                btnText='Go to Home'
                onPress={onLogin}
            />
        </View>
        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

//make this component available to the app
export default Login;
