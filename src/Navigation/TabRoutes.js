import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import { Image, StyleSheet } from 'react-native';
import {
    Home,
    Search,
    Post,
    Notification,
    Profile
} from '../Screens';
import { moderateScale, width, moderateScaleVertical } from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import strings from '../constants/lang';
import navigationStrings from '../constants/navigationStrings';

const BottomTab = createBottomTabNavigator();

const TabRoutes = (props) => {
    return (
        <BottomTab.Navigator
            tabBar={(tabsProps) => (
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            initialRouteName={navigationStrings.HOME}

            screenOptions={{
                headerShown: false,
                style: styles.customBottomtabsStyle,
                tabBarActiveTintColor: colors.blackColor,
                tabBarInactiveTintColor: 'gray',
                // tabBarShowLabel: false
            }}

        >
            <BottomTab.Screen
                name={navigationStrings.HOME}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ?
                                <Image source={imagePath.firstActiveIcon} />
                                : <Image source={imagePath.firstInActiveIcon} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.SEARCH}
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ?
                                <Image source={imagePath.secondActiveIcon} />
                                : <Image source={imagePath.secondInActiveIcon} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.POST}
                component={Post}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ?
                                <Image source={imagePath.thirdActiveIcon} />
                                : <Image source={imagePath.thirdInActiveIcon} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.NOTIFICATION}
                component={Notification}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ?
                                <Image source={imagePath.fourthActiveIcon} />
                                : <Image source={imagePath.fourthInActiveIcon} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.PROFILE}
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ?
                                <Image source={imagePath.fifthActiveIcon} />
                                : <Image source={imagePath.fifthInActiveIcon} />
                        );
                    },
                }}
            />

        </BottomTab.Navigator>
    );
};

const styles = StyleSheet.create({
    customBottomtabsStyle: {
        //height: moderateScale(60)
    },

});

export default TabRoutes