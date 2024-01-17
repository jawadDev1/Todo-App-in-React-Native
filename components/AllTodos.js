import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

function AllTodos({ todos, deleteTodo }) {
  return (
    <View style={styles.allTodos}>
      {todos.length >= 1 &&
        todos.map((todo) => (
          <View style={styles.todoBox} key={todo.id}>
            <Text style={styles.todoText}>{todo.text}</Text>
            <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
              <FontAwesome5 name="trash" size={22} color="red" />
            </TouchableOpacity>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  allTodos: {
    marginTop: 33,
  },
  todoBox: {
    width: 300,
    paddingHorizontal: 12,
    paddingVertical: 3,
    margin: 8,
    borderWidth: 1,
    borderColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoText: {
    color: "white",
    fontSize: 22,
  },
});

export default AllTodos;
