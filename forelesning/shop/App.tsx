import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import ProductImage from './components/ProductImage';
import React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0);

  const handleButtonPress = () => {
    setCount(count + 1);
  };

  console.log("Hello, world!");
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Produktnavn!</Text>
      <Text style={styles.h2}>Produktpris</Text>
      <ProductImage />
      <StatusBar style="auto" />
      <Pressable onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Legg til i handlekurv</Text>
      </Pressable>
      <Text style={styles.buttonPresses}>{`Button pressed ${count} times`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'darkgray',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    userSelect: 'none',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonPresses: {
    marginTop: 30,
    fontSize: 12,
  }
});