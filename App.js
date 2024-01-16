import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

export default function App() {
  const [text, setText] = useState("");

  function addTodo() {}

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo App</Text>
      <TextInput
        editable
        multiline
        numberOfLines={5}
        maxLength={100}
        defaultValue={text}
        onChange={(text) => setText(text)}
        placeholder="Enter Todo"
        placeholderTextColor={"white"}
        style={styles.todoInput}
      />
      <Pressable style={styles.btn} onPress={addTodo}>
        <Text style={styles.btnText} >Add</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4d3903",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
  },
  todoInput: {
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 11,
    paddingVertical: 3,
    height: 62,
    color: "white",
    width: 300,
    fontSize: 15,
    margin: 63,
  },
  btn: {
    width: 140,
    borderWidth: 1,
    borderColor: 'white',
    padding: 9,
    backgroundColor: '#a8b545'
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }
});
