import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

function CreateTodo({ text, setText, addTodo }) {
  return (
    <>
      <TextInput
        editable
        multiline
        numberOfLines={5}
        maxLength={100}
        defaultValue={text}
        onChangeText={(text) => setText(text)}
        placeholder="Enter Todo"
        placeholderTextColor={"white"}
        style={styles.todoInput}
      />
      <Pressable style={styles.btn} onPress={addTodo}>
        <Text style={styles.btnText}>Add</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
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
    borderColor: "white",
    padding: 9,
    backgroundColor: "#304D30",
  },
  btnText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default CreateTodo;
