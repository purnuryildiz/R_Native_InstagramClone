import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/routes/RootNavigator';
import {colors} from './src/constants/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: colors.WHITE},
});
