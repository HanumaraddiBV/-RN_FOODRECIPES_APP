import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  // Image,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

import LottieView from 'lottie-react-native';
// import {Button} from '../../Common/Button';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      {/* <Image
        source={require('../../assets/images/food-recipe.jpeg')}
        style={styles.logo}
      /> */}
      <LottieView
        source={require('../../assets/LottieAnimations/Login-food.json')}
        style={styles.logo}
        autoPlay
        loop
      />
      {/* <Text style={styles.LoginText}>Login</Text> */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email or username"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 350,
    marginBottom: 5,
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 5,
    width: '90%',
    height: 350,
    justifyContent: 'flex-start',
    paddingVertical: 40,
  },
  input: {
    height: 60,
    width: '100%',
    padding: 15,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#ff9f1c',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  LoginText: {
    fontSize: 37,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    padding: 20,
  },
});

export default Login;
