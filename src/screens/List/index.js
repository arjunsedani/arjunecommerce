import React, { PureComponent } from "react";
import { SafeAreaView, FlatList, ScrollView } from "react-native";
import { ImageBasedCard, Spacing, ScrollCards } from "../../components";

const images = [
  {
    uri:
      'https://hostcontentrepodev.blob.core.windows.net/buildingcontainer/e0f01db7-e8f7-4dff-bc8d-2d7e511f591e_IMG_0120.PNG',
    subtitle: "Test Message"
  },
  {
    uri:
      'https://hostcontentrepodev.blob.core.windows.net/buildingcontainer/b534d607-9995-41e9-9aaa-6ee62b623594_Yoga.jpeg',
    subtitle: "Test Message"
  },
  {
    uri:
      'https://hostcontentrepodev.blob.core.windows.net/buildingcontainer/bfb90a1d-d624-431a-bb57-e52fb1e73ef2_professional-development-activities.jpeg',
    subtitle: "Test Message"
  },
  {
    uri:
      'https://hostcontentrepodev.blob.core.windows.net/buildingcontainer/b5b33d87-3d09-4060-a66b-681c63cc0e1d_machine-learning.jpg',
    subtitle: "Test Message"
  }
];

export default class List extends PureComponent {
  renderExtension = ({ item: n }) => {
    return (
      <Spacing hSpacing={10}>
        <ScrollCards source={{ uri: n.uri }} subtitle={n.subtitle} />
      </Spacing>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <ImageBasedCard
            source={{ uri: 'https://bit.ly/2ICqIyl' }}
            subtitle={'Test Message'}
          />
          <Spacing vSpacing={10} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            showscrollEventThrottle={10}
          >
            {/* <FlatList
              horizontal={true}
              data={images}
              renderItem={this.renderExtension}
            /> */}
            {images &&
              images.map((image, index) => {
                return (
                  <Spacing hSpacing={10}>
                    <ScrollCards
                      source={{ uri: image.uri }}
                      subtitle={image.subtitle}
                    />
                  </Spacing>
                );
              })}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
