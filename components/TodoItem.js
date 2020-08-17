import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export default function TodoItem({ item, todoHandler }) {
  return (
    <TouchableOpacity
      onPress={() => {
        todoHandler(item);
      }}
    >
      <View style={styles.item}>
        <MaterialIcons name="delete" size={20} color="#333" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  itemText: {
    marginLeft: 10,
  },
});
