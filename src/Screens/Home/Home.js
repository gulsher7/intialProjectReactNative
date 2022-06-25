//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import actions from '../../redux/actions';

// create a component
const Home = () => {

  const onLogout  = () =>{
      actions.logout()
  }
  return (
    <View style={styles.container}>
     <ButtonComp 
     btnText='LOGOUT'
     onPress={onLogout}
     
     />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Home;
