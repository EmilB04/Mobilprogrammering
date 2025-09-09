import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Product from './components/Product';
import React from 'react';

export default function App() {
  console.log("Hello, world!");
  return (
    <View style={styles.container}>
      <Product productName='Pent bilde' productPrice={199} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});