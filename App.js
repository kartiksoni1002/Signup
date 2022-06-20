/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import SignInscreen from './src/screens/SignInscreen';


const App = () => {

  return (
    <SafeAreaView style={styles.root}>
    <SignInscreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#F9FBFC'
  }
});

export default App;
