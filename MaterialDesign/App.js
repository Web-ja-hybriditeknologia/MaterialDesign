import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Login from './screens/Login';
import MainAppbar from './components/MainAppbar';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Login />
        <MainAppbar title="Main Appbar" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
