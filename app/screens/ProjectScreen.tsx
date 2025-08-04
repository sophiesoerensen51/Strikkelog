import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProjectScreen = ({ route, navigation }) => {
  const { userName } = route.params || {}; 

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Velkommen, {userName}!</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Text style={styles.buttonText}>Gå tilbage til start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#748c84',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProjectScreen;
