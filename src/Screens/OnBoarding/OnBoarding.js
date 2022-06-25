//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';

// create a component
const OnBoarding = ({navigation}) => {
    return (
        <WrapperContainer>
        <View style={styles.container}>
            <ButtonComp 
                btnText='Go to Initial Auth Screen'
                onPress={()=>navigation.navigate(navigationStrings.INITIAL_AUTH)}
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
export default OnBoarding;
