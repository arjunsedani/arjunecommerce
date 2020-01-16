import React, {PureComponent} from 'react';
import firebase from 'firebase';
import {AsyncStorage, SafeAreaView, Text} from 'react-native';
import {Spacing, Button, Input} from '../../components';

type Props = {
  navigation: {
    navigate: (screen: string) => {},
  },
};
const config = {
  apiKey: 'AIzaSyA7zZhPN2ATeiF84hSTLlShsu-rXhORnNI',
  authDomain: 'gamificationdata-gcube.firebaseapp.com',
  databaseURL: 'https://gamificationdata-gcube.firebaseio.com',
  projectId: 'gamificationdata-gcube',
  storageBucket: 'gamificationdata-gcube.appspot.com',
  messagingSenderId: '353476659798',
};
firebase.initializeApp(config);

export default class Login extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  // eslint-disable-next-line class-methods-use-this
  async storeToken(user) {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(user));
    } catch (error) {
      // console.log('Something went wrong', error);
    }
  }

  onButtonPress = () => {
    const {
      navigation: {navigate},
    } = this.props;
    const {email, password} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.storeToken(res.user);
        navigate('Drawer');
      })
      .catch(error => {
        // Handle Errors here.
      });
  };

  render() {
    return (
      <SafeAreaView>
        <Spacing hSpacing={20} vSpacing={10}>
          <Text>User Name</Text>
          <Input
            placeholder="Email"
            onChangeText={email => this.setState({email})}
          />
          <Spacing vSpacing={10} />
          <Text>Password</Text>
          <Input
            placeholder="Password"
            onChangeText={password => this.setState({password})}
          />
          <Spacing vSpacing={10} />
          <Button
            primary
            // fullWidth
            onPress={this.onButtonPress}
            text="Sign in"
          />
        </Spacing>
      </SafeAreaView>
    );
  }
}
