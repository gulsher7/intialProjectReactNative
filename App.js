import React, { useEffect } from 'react';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Routes from "./src/Navigation/Routes";
import actions from './src/redux/actions';
import { saveUserData } from './src/redux/reducers/auth';
import store from './src/redux/store';
import fontFamily from './src/styles/fontFamily';
import { moderateScale, textScale } from './src/styles/responsiveSize';
import { getFirstTime, getUserData } from './src/utils/utils';


const { dispatch } = store;

const App = () => {

  const init = async () => {
    try {
      const userData = await getUserData();
      const isFirstTime = await getFirstTime();
      if (userData && !!userData.token) {
        console.log("enter")
        dispatch(saveUserData(userData));
      }
      if (!!isFirstTime) {
        actions.isFirstTime(true)
      }
      console.log('is first time app', isFirstTime)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    init()
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Routes />
        <FlashMessage
          titleStyle={{
            marginRight: moderateScale(5),
            fontFamily: fontFamily.medium,
            fontSize: textScale(16)
          }}
          position="top"
        />
      </SafeAreaProvider>
    </Provider>
  );
};


export default App;