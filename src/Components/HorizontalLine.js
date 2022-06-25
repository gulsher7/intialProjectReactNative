import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../styles/colors';


const HorizontalLine = ({
    lineStyle,
}) => {
    return (
        <View style={{ ...styles.lineStyle, ...lineStyle }} />

    );
};

const styles = StyleSheet.create({
    lineStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: colors.borderColor
    },
});


export default HorizontalLine;
