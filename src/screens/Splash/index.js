import React, {Component} from 'react';
import {
  Animated,
  Dimensions,
  ImageBackground,
  Platform,
  View,
} from 'react-native';

import Images from '../../assets/images';
import {FlexContainer} from '../../components/Containers';

export type Props = {
  onFirstFadeComplete?: () => void,
  navigation: {
    navigate: (screen: string) => {},
  },
};

export type State = {
  opacity: any,
};

export default class OnboardingSplashingScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      opacity: new Animated.Value(1),
    };
  }

  componentDidMount() {
    this.onLoad();
    setTimeout(this.startLogin, 5000);
  }

  onLoad = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.opacity, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  startLogin = () => {
    this.props.navigation.navigate('FormPage1');
    // if (this.props.onFirstFadeComplete) {
    //   this.props.navigation.navigate('Drawer');
    //   this.props.onFirstFadeComplete();
    // }
  };

  render() {
    const bgHeight = Dimensions.get('screen').height;
    const bgWidth = Dimensions.get('screen').width;

    let logoBGHeight = 0;
    let logoBGWidth = 0;
    if (Platform.OS === 'ios') {
      logoBGHeight = Dimensions.get('window').height * 0.21;
      logoBGWidth = Dimensions.get('window').height * 0.21;
    } else {
      logoBGHeight = Dimensions.get('window').height * 0.25;
      logoBGWidth = Dimensions.get('window').height * 0.25;
    }

    return (
      <View>
        <ImageBackground
          source={Images.healthCare}
          style={{
            height: bgHeight,
            width: bgWidth,
          }}
          resizeMode={'cover'}>
          <FlexContainer
            flex={1}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'column'}>
            <ImageBackground
              source={Images.emptySquare}
              style={{
                height: logoBGHeight,
                width: logoBGWidth,
              }}
              resizeMode={'contain'}>
              <FlexContainer flex={1} justifyContent={'center'}>
                <Animated.Image
                  source={Images.heartBeat}
                  style={{
                    alignSelf: 'center',
                    marginBottom: '12%',
                    opacity: this.state.opacity,
                  }}
                />
              </FlexContainer>
            </ImageBackground>
          </FlexContainer>
        </ImageBackground>
      </View>
    );
  }
}
