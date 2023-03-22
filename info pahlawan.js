import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const App = () => {
  const [pahlawan, setPahlawan] = useState({});

  useEffect(() => {
    fetch('https://api.example.com/pahlawan')
      .then(response => response.json())
      .then(data => setPahlawan(data));
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: pahlawan.photo}} />
      <Text style={styles.name}>{pahlawan.name}</Text>
      <Text style={styles.description}>{pahlawan.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default App;
