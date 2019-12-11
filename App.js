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

  const removeNameHandler = nameId => {
    console.log("list of names ", listOfNames);
    setListNames(listOfNames => {
      return listOfNames.filter(name => {
        console.log("Filtering this name: ", name);
        console.log("current id: ", name.key);
        console.log("remove this: ", nameId);
        if (name.key !== nameId) {
          return true;
        } else {
          return false;
        }
      });
    });
  };

  return (
    <View style={styles.screen}>
      <NameInput onAddName={addNameHandler} />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={listOfNames}
        renderItem={itemData => (
          <NameItem
            key={itemData.item.key}
            id={itemData.item.key}
            name={itemData.item.value}
            onDelete={removeNameHandler}
          />
        )}
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
