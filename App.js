import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import NameItem from "./components/NameItem";
import NameInput from "./components/NameInput";

export default function App() {
  const [listOfNames, setListNames] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addNameHandler = enteredName => {
    setListNames(currentNames => [
      ...currentNames,
      { key: Math.random().toString(), value: enteredName }
    ]);
    setIsAddMode(false);
  };

  const removeNameHandler = nameId => {
    setListNames(listOfNames => {
      return listOfNames.filter(name => {
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
      <Button title="add New Name" onPress={() => setIsAddMode(true)} />
      <NameInput visible={isAddMode} onAddName={addNameHandler} />
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
