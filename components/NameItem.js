import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NameItem = props => {
  return (
    <View style={styles.nameItem}>
      <Text>{props.name}</Text>
    </View>
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
