import React from "react"
import navigationStrings from "../constants/navigationStrings";
import {
    InitialAuth,
    Login,
    Signup,
    OtpVerification,
    ForgotPassword,
    OnBoarding
} from "../Screens";

export default function (Stack, isFirstTime) {
    console.log('auth stack', isFirstTime)
    return (
        <>
            {!isFirstTime && <Stack.Screen
                name={navigationStrings.ON_BOARDING}
                component={OnBoarding}
                options={{ headerShown: false }}
            />}
            <Stack.Screen
                name={navigationStrings.INITIAL_AUTH}
                component={InitialAuth}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name={navigationStrings.LOGIN}
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.SIGNUP}
                component={Signup}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.OTP_VERIFICATION}
                component={OtpVerification}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.FORGOT_PASSWORD}
                component={ForgotPassword}
                options={{ headerShown: false, }}
            />
        </>
    );
}
