import React, {PureComponent} from 'react';
import {ScrollView, Animated, View, Image} from 'react-native';
import {caouselStyles} from './styled';

type Props = {
  images: Array<string>,
};

export default class Carousel extends PureComponent<Props, State> {
  state = {width: 1, height: null};

  scrollX = new Animated.Value(0);

  onLayoutDidChange = (e: ViewLayoutEvent) => {
    const {layout} = e.nativeEvent;
    this.setState({width: layout.width, height: layout.height});
  };

  render() {
    const {images} = this.props;
    const {width, height} = this.state;
    const imageArray = [];
    const carouselIndicatorArray = [];
    const position = Animated.divide(this.scrollX, width);
    images.forEach((image, i) => {
      imageArray.push(
        <Image
          key={i}
          width={width}
          height={height}
          source={{uri: image}}
          style={
            caouselStyles({
              width,
              height,
            }).imageStyle
          }
        />,
      );
      const opacity = position.interpolate({
        inputRange: [i - 1, i, i + 1],
        outputRange: [0.3, 1, 0.3],
        extrapolate: 'clamp',
      });
      const carouselIndicator = (
        <Animated.View
          key={i}
          opacity={opacity}
          style={{
            height: 10,
            width: 10,
            backgroundColor: "white",
            margin: 8,
            borderRadius: 5,
          }}
        />
      );
      carouselIndicatorArray.push(carouselIndicator);
    });

    return (
      <View onLayout={this.onLayoutDidChange} style={{flex: 1}}>
        <View
          width={width}
          height={height}
          style={
            caouselStyles({
              width,
              height,
            }).imageScrollContainerStyle
          }>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={10}
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {x: this.scrollX}}},
            ])}>
            {imageArray}
          </ScrollView>
          <View
            style={
              caouselStyles({
                width,
                height,
              }).scrollIndicatorStyle
            }
            numberOfLines={3}>
            {carouselIndicatorArray}
          </View>
        </View>
      </View>
    );
  }
}
