import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'space-between', 
        marginHorizontal: moderateScale(34)
    },
    experienceText: {
        ...commonStyles.fontSize18,
        fontFamily:fontFamily.medium,
        alignSelf:'center',
        marginVertical:moderateScaleVertical(16)
    },
    btnStyle: {
        backgroundColor: colors.lighPink, 
        alignSelf: 'center' ,
        marginTop:moderateScaleVertical(16)
    },
    headerStyle: {
        alignItems: 'center',
        paddingHorizontal: 0,
        marginBottom: moderateScaleVertical(24)
    }
   
});

export default styles