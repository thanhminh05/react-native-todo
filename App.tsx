import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

interface ITodo {
  id: number;
  name: string;
}

export default function App() {
  const [todo, setTodo] = useState('');
  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  const handleAddTodo = () => {
    if (!todo) return;
    setListTodo((prev) => [...prev, { id: Math.floor(Math.random() * 90000) + 10000, name: todo }]);
    setTodo('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo APP</Text>
      <View>
        <TextInput style={styles.todoInput} value={todo} onChangeText={(value) => setTodo(value)} />
        <Button title="Add todo" onPress={handleAddTodo}></Button>
      </View>

      <View style={styles.body}>
        <FlatList
          data={listTodo}
          keyExtractor={(item) => item.id + ''}
          renderItem={({ item }) => <Text style={styles.todoItem}>{item.name}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 60,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  todoInput: { borderBottomWidth: 1, borderBottomColor: 'green', padding: 5, margin: 15 },
  body: {
    paddingHorizontal: 10,
  },
  todoItem: {
    padding: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
  },
});
