import React from 'react';
import { Image } from 'react-native';
import colors from '../styles/colors';
import { moderateScale } from '../styles/responsiveSize';

const RoundImg = ({
    img,
    size = 64,
    bgColor = colors.rubyColorOpacity20,
    style
}) => {
    return (
        <Image
            style={{
                width: moderateScale(size),
                height: moderateScale(size),
                borderRadius: moderateScale(size / 2),
                backgroundColor:bgColor,
                ...style
            }}
            source={{ uri: !!img ? img : null }}
        />
    )
};

export default RoundImg;