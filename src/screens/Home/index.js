import React, { PureComponent } from 'react';
import { SafeAreaView, Text, FlatList, ScrollView } from 'react-native';
import { Button, ListView, Avatar, Input, Spacing } from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  navigation: {
    navigate: (screen: string) => {}
  }
};

export default class HomeScreen extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      init: 'AB'
    };
  }

  componentDidMount() {
    const url = "https://gamificationdata-gcube.firebaseio.com/users.json";
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: [...res[0].tasks],
          filteredData: [...res[0].tasks]
        });
      });
  }

  renderExtension = ({ item: n }) => {
    return (
      <Spacing vSpacing={10} hSpacing={10}>
        <ListView data={n} />
      </Spacing>
    );
  };

  changeAvatar = ({ item: n }) => {
    this.setState({
      init: "AD"
    });
  };

  onChangeValue = ({ text }) => {
    const { data } = this.state;
    // const newArray = data.filter(function(el) {
    //   return el.alias === text;
    // });
    // case sensitive
    // const newArray = data.filter(el => el.alias.includes(text));
    //Non case sensitive
    const filterArray = data.filter(x =>
      x.alias.toLowerCase().includes(text.toLowerCase())
    );

    if (text === "") {
      this.setState({
        filteredData: data
      });
    } else if (text !== "") {
      this.setState({
        filteredData: filterArray
      });
    }
  };

  render() {
    const { filteredData } = this.state;
    return (
      <SafeAreaView>
        <Avatar onPress={this.changeAvatar} initials={this.state.init} />
        <Text>this is setting screen</Text>
        <ScrollView>
          <Input
            type="search"
            placeholder="Search Users"
            onChangeText={text => this.onChangeValue({ text })}
            // defaultValue="This is some multiline text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            // multiline
          />
          <Button onPress={this._onPressButton} text="Press Me" />
          <FlatList data={filteredData} renderItem={this.renderExtension} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
