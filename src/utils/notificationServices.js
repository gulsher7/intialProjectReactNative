import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showError } from '../helper/helperFunctions';


export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
        console.log('Authorization status:', authStatus);
        getFcmToken()
    }
}

const getFcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log(fcmToken, 'the old token');
    if (!fcmToken) {
        try {
            const fcmToken = await messaging().getToken();
            if (fcmToken) {
                console.log(fcmToken, 'the new genrated token');
                // user has a device token
                await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        } catch (error) {
            console.log(error, "error in fcmToken")
            showError(error.message)
        }
    }
}

export const notificationListener = async () => {
    messaging().onNotificationOpenedApp(async (remoteMessage) => {
        console.log('Notification caused app to open from background state bla bla:', remoteMessage);
    });

    messaging().onMessage(async remoteMessage => {
        console.log("recived in foreground", remoteMessage)
    });

    // Check whether an initial notification is available
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log("remote message", remoteMessage)
            }

        });

}

// messaging().onTokenRefresh(fcmToken => {
//     console.log("New token refresh: ", fcmToken)

// })