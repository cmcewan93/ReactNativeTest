import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter a name " style={styles.input} />
        <Button title="Add"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //Screen Container
  screen: {
    padding: 50
  },
  //Input Container
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  //Input
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%"
  }
});
