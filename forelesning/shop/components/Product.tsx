import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Product( {productName, productPrice}: {productName?: string, productPrice?: number} ) {
  const [count, setCount] = React.useState(0);

  const handleButtonPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{productName ?? "Product Name"}</Text>
      <Text style={styles.h2}>{productPrice ? `${productPrice} kr` : "Product Price"}</Text>
      <Image source={require('../assets/wallpaper.jpg')} style={styles.wallpaperImage} />
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
  wallpaperImage: {
    maxWidth: 300,
    maxHeight: 300,
    borderRadius: 10,
    aspectRatio: 1,
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