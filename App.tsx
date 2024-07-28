import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const students = [
    {
      id: 1,
      name: 'Minh',
    },
    {
      id: 2,
      name: 'Minh',
    },
    {
      id: 3,
      name: 'Minh',
    },
    {
      id: 4,
      name: 'Minh',
    },
    {
      id: 5,
      name: 'Minh',
    },
    {
      id: 6,
      name: 'Minh',
    },
    {
      id: 7,
      name: 'Minh',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id + ''}
        data={students}
        renderItem={({ item }) => (
          <View>
            <Text style={{ paddingVertical: 80 }}>{item.name}</Text>
          </View>
        )}
      />
      {/* <ScrollView>
        {students.map((item, index) => (
          <Text key={index} style={{ marginVertical: 30 }}>
            {item}
          </Text>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
});
