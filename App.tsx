import { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface ITodo {
  id: number;
  name: string;
}

export default function App() {
  const [todo, setTodo] = useState('');
  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert('Todo title', 'Todo content', [
        {
          text: 'Huỷ',
          onPress: () => console.log('Cancel Press'),
          style: 'cancel',
        },
        {
          text: 'Xác nhận',
          onPress: () => console.log('OKE'),
          style: 'cancel',
        },
      ]);
      return;
    }
    setListTodo((prev) => [...prev, { id: Math.floor(Math.random() * 90000) + 10000, name: todo }]);
    setTodo('');
  };

  const deleteTodo = (id: number) => {
    setListTodo((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                <Text style={styles.todoItem}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    marginVertical: 10,
  },
});
