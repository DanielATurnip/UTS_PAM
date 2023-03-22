import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang</Text>
      <Text style={styles.subtitle}>di Aplikasi Pahlawan Indonesia</Text>
      <Image source={require('./pahlawan.png')} style={styles.image} />
      <Text style={styles.description}>
        Aplikasi ini akan memperkenalkan kamu pada beberapa pahlawan Indonesia yang telah berjasa besar bagi negara ini.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
