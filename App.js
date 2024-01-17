import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import uuid from "react-native-uuid";
import AllTodos from "./components/AllTodos";
import CreateTodo from "./components/CreateTodo";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const id = uuid.v4();
    const todo = { id, text };
    setTodos([...todos, todo]);
    setText("");
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id != id));
  }

  return (
    <ScrollView  contentContainerStyle={styles.container} scrollEnabled>
          <Text style={styles.heading}>Todo App</Text>

          {/* Create a Todo  */}
          <CreateTodo text={text} setText={setText} addTodo={addTodo} />

          {/* Display All todos  */}
          <AllTodos todos={todos} deleteTodo={deleteTodo} />

          <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#163020",
    alignItems: "center",
    paddingTop: "20%",
  },
  heading: {
    fontSize: 32,
    color: "#EEF0E5",
    fontWeight: "bold",
  },
});
