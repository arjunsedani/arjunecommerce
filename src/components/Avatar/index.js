import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { connect } from 'react-redux';

import { selectors as activeUserSelectors } from '../../redux/activeUser';
import Icon from 'react-native-vector-icons/Ionicons';
import {avatarStyles} from './styled';



type Props = {
  initials: string,
  checked: boolean,
  onPress: () => void,
};

export const Avatar = (props: Props) => {
  const {initials, onPress, checked} = props;
  return (
    <TouchableOpacity style={avatarStyles.roundBg} onPress={onPress}>
      {checked ? (
        <Icon name="ios-checkmark" size={28} color="#29ccc4" />
      ) : (
        <Text style={avatarStyles.initials}>{initials}</Text>
      )}
    </TouchableOpacity>
  );
};


const mapStateToProps = state => ({
  initials: activeUserSelectors.selectInitials(state)
});

const mapActionsToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Avatar);

