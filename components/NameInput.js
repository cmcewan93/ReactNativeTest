import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal } from "react-native";

const NameInput = props => {
  const [enteredName, setEnteredName] = useState("");

  const nameInputHandler = enteredText => {
    setEnteredName(enteredText);
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter a name "
          style={styles.input}
          onChangeText={nameInputHandler}
          value={enteredName}
        />
        <Button
          title="Add"
          onPress={() => props.onAddName(enteredName)}
        ></Button>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  //Input Container
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  //Input
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10
  }
});
export default NameInput;
