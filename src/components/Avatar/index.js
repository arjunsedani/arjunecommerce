import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import allActions from '../../redux/actions';

import {avatarStyles} from './styled';




type Props = {
  initials: string,
  checked: boolean,
  onPress: () => void,
};

export const Avatar = (props: Props) => {
  const {initials, onPress, checked} = props;
  const currentUser = useSelector(state => state.currentUser);
  return (
    <TouchableOpacity style={avatarStyles.roundBg} onPress={onPress}>
       {
        currentUser.loggedIn ? 
        <>
           <Text style={avatarStyles.initials}>{currentUser.firstName.slice(0, 1)}{currentUser.lastName.slice(0, 1)}</Text>
        </> 
        : 
        <>
           <Text style={avatarStyles.initials}></Text>
        </>
        }
    </TouchableOpacity>
  );
};
