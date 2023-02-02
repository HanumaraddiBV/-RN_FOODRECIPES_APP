/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import SignUp from './src/screens/SignUp/SignUp';

// import Welcome from './src/screens/WelComeScreen/Welcome';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaProvider style={{flex: 1}}>
      {/* <Welcome /> */}
      <SignUp />
    </SafeAreaProvider>
  );
}

export default App;
