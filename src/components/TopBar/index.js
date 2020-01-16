import * as React from 'react';
import { View,SafeAreaView, Text } from 'react-native';

// import { TitleText } from '../Text';

import {TopBarContainerStyles} from './styled';

type Props = {
  title: string,
  renderLeftContainer?: () => React.Node,
  renderRightContainer?: () => React.Node,
  renderExtremeRightContainer?: () => React.Node
};

export const TopBar = (props: Props) => {
  const { title, renderLeftContainer, renderRightContainer, renderExtremeRightContainer } = props;
  return (
    <SafeAreaView>
      <View   style={TopBarContainerStyles.TopBarContainer}>
        {renderLeftContainer && <View style={TopBarContainerStyles.leftContainer}>{renderLeftContainer()}</View>}
        {title && <Text  style={TopBarContainerStyles.titleContainer}>{title}</Text>}
        {renderRightContainer && <View style={TopBarContainerStyles.rightContainer}>{renderRightContainer()}</View>}
        {renderExtremeRightContainer && (
          <View style={TopBarContainerStyles.extremeRightContainer}>{renderExtremeRightContainer()}</View>
        )}
      </View>
    </SafeAreaView>
  );
};

TopBar.defaultProps = {
  renderLeftContainer: undefined,
  renderRightContainer: undefined,
  renderExtremeRightContainer: undefined
};
