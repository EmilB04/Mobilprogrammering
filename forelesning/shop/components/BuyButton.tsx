import { Pressable, Text, StyleSheet, type GestureResponderEvent } from "react-native";
import React, { useState } from "react";
import { productStyles } from "./styles";

export default function BuyButton() {
  const [count, setCount] = React.useState(0);

  const handleButtonPress = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Pressable onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Legg til i handlekurv</Text>
      </Pressable>
      <Text style={styles.buttonPresses}>{`Button pressed ${count} times`}</Text>
    </>
  );
}

const styles = StyleSheet.create({
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