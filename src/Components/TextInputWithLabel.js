import React from 'react';
import { View, Text, TextInput, StyleSheet, } from 'react-native';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import commonStyles from '../styles/commonStyles';

const TextInputWithLabel
    = ({
        value,
        onChangeText,
        placeholder,
        inputStyle,
        label,
        ...props
    }) => {
        return (
            <View style={{}}>
                <Text style={styles.labelText}>{label} </Text>
                <TextInput
                    style={{ ...styles.inputStyle }}
                    value={value}
                    onChangeText={onChangeText}
                    {...props}
                />
            </View>
        )
    }
const styles = StyleSheet.create({
    inputStyle: {
        ...commonStyles.fontSize14,
        backgroundColor: colors.whiteColor,
        borderRadius: moderateScale(2),
        height: moderateScale(40),
        paddingHorizontal: moderateScale(8),
        marginBottom: moderateScaleVertical(16),
        borderWidth: 1,
        borderColor: colors.grayColor,
        alignItems: 'center',
    },
    labelText: {
        ...commonStyles.fontSize20,
        fontFamily: fontFamily.medium,
        marginBottom: moderateScaleVertical(24),
        textTransform:'uppercase'
    }
});


export default TextInputWithLabel

