import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { moderateScale } from '../styles/responsiveSize';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';

export default function HeaderComp({ leftText, onPressRight, headerStyle }) {
    return (
        <View style={{ ...styles.headerStyle, ...headerStyle }}>
            <Text style={styles.textStyle}>{leftText}</Text>
            <TouchableOpacity onPress={onPressRight}>
                <Image source={imagePath.icClose} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    headerStyle: {
        minHeight: moderateScale(48),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(16)
    },
    textStyle: {
        ...commonStyles.fontSize18,
        fontFamily: fontFamily.medium,
        color: colors.themeColor,
        textTransform: 'uppercase'
    }
})