import React, { PureComponent } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { FlexContainer } from "../Containers";
import { CardSection } from "../CardSection";
import { Avatar } from "../Avatar";
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
  data: {
    alias: string
  }
};

export default class ListView extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  toggleCheck = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  render() {
    const { data } = this.props;
    return (
      <CardSection hairlineBorder fullBleed flex={1}>
        <TouchableOpacity onPress={this.toggleCheck}>
          <FlexContainer
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
            flex={1}
          >
            <Avatar initials="AB" checked={this.state.checked} />
            <Text>{data.alias}</Text>
            <Icon name="ios-checkmark" size={28} color="black" />
          </FlexContainer>
        </TouchableOpacity>
      </CardSection>
    );
  }
}
