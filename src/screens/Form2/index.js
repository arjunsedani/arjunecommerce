import React, {PureComponent, useEffect, useCallback, useState} from 'react';
import firebase from 'firebase';
import {AsyncStorage, SafeAreaView, Text} from 'react-native';
import {Spacing, Button, Input} from '../../components';

type Props = {
  navigation: {
    navigate: (screen: string) => {},
  },
};

function Form2(props: Props) {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');

  // const fetchMyAPI = useCallback(async () => {
  //   try {
  //     await AsyncStorage.getItem('userData');
  //     console.log('useasdfghjkrdata', await AsyncStorage.getItem('userData'));
  //   } catch (error) {
  //     // console.log('Something went wrong', error);
  //   }
  // });

  // useEffect(() => {
  //   fetchMyAPI();
  // }, []);

  // eslint-disable-next-line class-methods-use-this
  const onButtonPress = () => {
    props.navigation.navigate('FormPage2');
  };

  return (
    <SafeAreaView>
      <Spacing hSpacing={20} vSpacing={10}>
        <Text>
          Parsed Value through React Navigation
          {JSON.stringify(props.navigation.getParam('firstName'))}
          lastName:
          {JSON.stringify(props.navigation.getParam('lastName'))}
        </Text>
        <Input
          placeholder="First Name"
          onChangeText={firstName => setfirstName({firstName})}
        />
        <Spacing vSpacing={10} />
        <Text>Password</Text>
        <Input
          placeholder="Last Name"
          onChangeText={lastName => setlastName({lastName})}
        />
        <Spacing vSpacing={10} />
        <Button
          primary
          // fullWidth
          onPress={onButtonPress}
          text="Sign in"
        />
      </Spacing>
    </SafeAreaView>
  );
}

export default Form2;
