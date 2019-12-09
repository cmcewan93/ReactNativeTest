import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";
import NameItem from "./components/NameItem";
import NameInput from "./components/NameInput";

export default function App() {
  const [listOfNames, setListNames] = useState([]);

  const addNameHandler = enteredName => {
    setListNames(currentNames => [
      ...currentNames,
      { key: Math.random().toString(), value: enteredName }
    ]);
  };

  return (
    <View style={styles.screen}>
      <NameInput onAddName={addNameHandler} />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={listOfNames}
        renderItem={itemData => <NameItem name={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  //Screen Container
  screen: {
    padding: 50
  }
});
