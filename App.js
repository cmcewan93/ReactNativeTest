import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function App() {
  const [enteredName, setEnteredName] = useState("");
  const [listOfNames, setListNames] = useState([]);

  const nameInputHandler = enteredName => {
    setEnteredName(enteredName);
  };

  const addNameHandler = () => {
    console.log(enteredName);
    console.log(listOfNames, "LIST");
    setListNames(currentNames => [...currentNames, enteredName]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter a name "
          style={styles.input}
          onChangeText={nameInputHandler}
          value={enteredName}
        />
        <Button title="Add" onPress={addNameHandler}></Button>
      </View>
      <View>
        {listOfNames.map(name => (
          <View style={styles.nameList}>
            <Text key={name}>{name}</Text>
          </View>
        ))}
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
  },
  //List of Names
  nameList: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
