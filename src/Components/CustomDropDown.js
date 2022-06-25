//import liraries
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import HorizontalLine from './HorizontalLine';
import imagePath from '../constants/imagePath';

export default CustomDropDown = ({
    data,
    selectedValue,
    btnStyle,
    placeholder
}) => {
    const [selectedItemValue, setSelectedItemValue] = useState('')
    const [dropDownPress, setDropDownPress] = useState(false)

    const selectedItem = (item) => {
        selectedValue(item)
        setSelectedItemValue(item)
        setDropDownPress(false)
    }
    return (
        <>
            <TouchableOpacity
                style={{ ...styles.btnStyle, ...btnStyle }}
                onPress={() => setDropDownPress(true)}
            >
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }} >
                    <Text style={selectedItemValue === '' ? styles.placeHolderText : { ...commonStyles.fontSize18,color: colors.blackColor }}>{selectedItemValue === '' ? placeholder : selectedItemValue}</Text>
                    <Image source={imagePath.icDropDown} />
                </View>
            </TouchableOpacity>

            {!!dropDownPress ? <ScrollView
                scrollEnabled={true}
                keyboardShouldPersistTaps='always'
                style={styles.mainView}
            >

                {data.map((item, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => selectedItem(item.name)}
                            style={{ width: "100%" }}
                        >
                            <View>
                                <Text style={{ ...commonStyles.fontSize16, color: colors.blackColor }}>{item.name}</Text>
                                <HorizontalLine lineStyle={{ marginVertical: moderateScaleVertical(16), borderBottomWidth: 0.3, }} />
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
                : null
            }
        </>
    )
}

let styles = StyleSheet.create({
    mainView: {
        padding: 16,
        borderWidth: 1,
        borderRadius: moderateScale(8),
        borderColor: '#F7F7F7',
        backgroundColor: colors.white,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginTop: 10


    },
    btnStyle: {
        minHeight: moderateScaleVertical(46),
        borderWidth: 1,
        borderColor: colors.borderColor,
        paddingHorizontal: moderateScale(16),
        justifyContent: 'center'


    },
    placeHolderText: {
        ...commonStyles.fontSize16,
        color: colors.blackOpacity40
    }
})
