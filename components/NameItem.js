import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const NameItem = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onDelete(props.id);
      }}
    >
      <View style={styles.nameItem} on>
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  //Name Item styling
  nameItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
export default NameItem;
