import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const textHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        value={text}
        style={styles.input}
        placeholder="New Todo..."
        onChangeText={(val) => {
          textHandler(val);
        }}
      />

      <Button
        title="Add Todo"
        color="coral"
        onPress={() => {
          submitHandler(text);
          setText("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
