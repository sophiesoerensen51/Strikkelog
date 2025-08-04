import React, { useState } from 'react';
import { 
  SafeAreaView, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  Image
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleContinue = () => {
    if (!name.trim()) {
      setErrorMessage('Indtast venligst dit navn før du fortsætter.');
      return; // Stop funktionen her
    }
    setErrorMessage('');
    navigation.navigate('ProjectScreen', { userName: name });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>House of Yarn</Text>
      <Image
        source={require('../assets/KnittingGirl.jpg')}
        style={{ width: 300, height: 300, alignSelf: 'center', marginBottom: 20 }}
      />
      <TextInput
        style={styles.input}
        placeholder="Indtast dit navn"
        value={name}
        onChangeText={setName}
      />
      {/* Vis fejlbesked hvis den findes */}
      {errorMessage ? (
        <Text style={{ color: 'red', textAlign: 'center', marginBottom: 10 }}>
          {errorMessage}
        </Text>
      ) : null}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Fortsæt</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f3f9eb',
  },
  title: {
    fontSize: 40,
    marginBottom: 10,
    textAlign: 'center',
    color: '#748c84',
    fontWeight: 'bold',
    marginTop: 50,
    padding: 10,
  },
  input: {
    borderColor: '#aaa',
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    marginBottom: 20,
    width: '50%',             
    alignSelf: 'center',      
  },
  button: {
    backgroundColor: '#748c84',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
    width: '50%',             
    alignSelf: 'center',      
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;
