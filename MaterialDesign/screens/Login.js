import React from 'react';
import { Appbar, TextInput, Button } from 'react-native-paper';
import MainAppbar from '../components/MainAppbar';
import { StyleSheet, View, Text } from 'react-native';

export default function Login() {
  return (
    <>
      <MainAppbar title="Login" />
      <View style={styles.container}>
        <TextInput label="Username" style={styles.input_field} />
        <TextInput label="Password" style={styles.input_field} keyboardType='visible-password' />
        <Button mode='contained' style={styles.button}>Submit</Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#3498db', padding: 16, justifyContent: 'center', alignItems: 'center' },
  input_field: { backgroundColor: '#ecf0f1', marginVertical: 8, padding: 10, borderRadius: 5, width: '100%' },
  button: { backgroundColor: '#2ecc71', marginVertical: 16, paddingVertical: 14, paddingHorizontal: 16, borderRadius: 5, width: '100%' },
});

