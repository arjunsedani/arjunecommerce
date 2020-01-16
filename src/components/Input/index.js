import React from 'react';
import { TextInput, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import { inputStyles, searchStyles } from './styled';

type InputProps = {
  value: string | number,
  onChangeText: (val: string) => any,
  onContentSizeChange?: (event: ContentEvent) => any,
  autoCorrect?: boolean,
  secureTextEntry?: boolean,
  multiline?: boolean,
  blurOnSubmit?: boolean,
  placeholder?: string,
  defaultValue?: string,
  onChangeText?: boolean,
  autoFocus?: boolean,
  type?: string
};

export const Input = (props: InputProps) => {
  const { multiline, defaultValue, placeholder, onChangeText, type } = props;
  return (
    <View
      style={
        inputStyles({
          multiline
        }).inputcontainer
      }
    >
      {type && type === 'search' && (
        <Icon
          style={searchStyles.searchIcon}
          name="ios-search"
          size={20}
          color="#000"
        />
      )}
      <TextInput
        {...props}
        multiline
        style={searchStyles.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
        defaultValue={defaultValue}
        underlineColorAndroid="transparent"
      />
      {type && type === 'search' && (
        <Icon
          style={searchStyles.cancelIcon}
          name="ios-close-circle"
          size={20}
          color="#000"
        />
      )}
    </View>
  );
};
