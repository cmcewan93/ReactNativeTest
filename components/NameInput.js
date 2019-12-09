import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";

const NameInput = props => {
  const [enteredName, setEnteredName] = useState("");

  const nameInputHandler = enteredText => {
    setEnteredName(enteredText);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter a name "
        style={styles.input}
        onChangeText={nameInputHandler}
        value={enteredName}
      />
      <Button title="Add" onPress={() => props.onAddName(enteredName)}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
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
export default NameInput;
