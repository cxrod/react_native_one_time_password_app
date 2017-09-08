import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD0ToYHrFf_1eIgpvGpp0Q1VXAPDqayEF8',
      authDomain: 'react-native-one-time-pa-1a410.firebaseapp.com',
      databaseURL: 'https://react-native-one-time-pa-1a410.firebaseio.com',
      projectId: 'react-native-one-time-pa-1a410',
      storageBucket: 'react-native-one-time-pa-1a410.appspot.com',
      messagingSenderId: '1098103584664'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
