import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  PanResponder
} from 'react-native';

import { Speedometer } from '../../components';

const arr = [];
for (var i = 0; i < 102; i++) {
  arr.push(i);
}
export default class ProfileScreen extends Component {
  constructor() {
    super();
    this.panResponder;
    this.state = {
      pan: new Animated.ValueXY(),
      // pan: new Animated.Value(0),
      speedoMeter: 0
    };
    this.animatedValue = [];
    arr.forEach(value => {
      this.animatedValue[value] = new Animated.Value(0);
    });
  }

  componentDidMount() {
    this.animate();
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => false,

      onMoveShouldSetPanResponder: (evt, gestureState) => true,

      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,

      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: (evt, gestureState) => {
        this.state.pan.setValue({ x: gestureState.dx, y: gestureState.dy });
        console.log('gesturex', gestureState.moveX);
        if (gestureState.moveX < 100) {
          this.setState({
            speedoMeter: gestureState.moveX / 4 - 10
          });
        } else if (gestureState.moveX > 100 && gestureState.moveX < 300) {
          this.setState({
            speedoMeter: gestureState.moveX / 4
          });
        } else if (gestureState.moveX > 300) {
          console.log('gesturex 400', gestureState.moveX);
          this.setState({
            speedoMeter: gestureState.moveX / 4 + 2
          });
        }
      }
    });
  }

  // animate() {
  //   const animations = arr.map(item => {
  //     return Animated.timing(this.animatedValue[item], {
  //       toValue: 1,
  //       duration: 4000
  //     });
  //   });
  //   Animated.stagger(10, animations).start();
  // }

  animate() {
    const animations = arr.map(item => {
      return Animated.timing(this.animatedValue[item], {
        toValue: 1,
        duration: 50
      });
    });
    Animated.sequence(animations).start();
  }

  render() {
    const animations = arr.map((a, i) => {
      return (
        <Animated.View
          key={i}
          style={{
            opacity: this.animatedValue[a],
            height: 20,
            width: 20,
            backgroundColor: "red",
            marginLeft: 3,
            marginTop: 3
          }}
        />
      );
    });

    return (
      <SafeAreaView>
        {/* {animations} */}
        <Animated.View {...this.panResponder.panHandlers}>
          <Speedometer value={this.state.speedoMeter} />
        </Animated.View>
      </SafeAreaView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: "wrap"
//   }
// });
