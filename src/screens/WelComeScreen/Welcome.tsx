import React from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '../../Common/Button';
import {COLORS} from '../../constants/constants';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />

      <View style={styles.header}>
        <ImageBackground
          source={require('../assets/images/food-recipe.jpeg')}
          resizeMode={'cover'}
          style={styles.backgroundImage}>
          <LinearGradient
            colors={['transparent', 'black']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.linearGradient}>
            <Text style={styles.headerText}>
              Cooking a Delicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Discover more than 1200 food recipes in your hand and cooking it
          easily!
        </Text>
        <View style={styles.buttonContainer}>
          <Button text={'Login'} colors={[COLORS.green, '#30bf6b']} />
          <Button text={'Sign Up'} colors={['#52b788']} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    height: '65%',
    width: '100%',
  },
  headerText: {
    paddingLeft: 18,
    fontSize: 32,
    color: 'white',
    width: '80%',
    fontWeight: 'bold',
  },
  linearGradient: {
    height: 100,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  body: {
    flex: 1,
    paddingHorizontal: 18,
  },
  bodyText: {
    color: '#838383',
    width: '75%',
    fontSize: 18,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
export default Welcome;
