import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <TextInput value={name} onChangeText={(newText) => setName(newText)} style={{ borderWidth: 1, width: 300 }} />
      <Text style={{ fontSize: 40, fontWeight: '600' }}>My name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
