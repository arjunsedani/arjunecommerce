/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  progress: {
    position: number,
    offset: number,
  },
  numberOfPages: number,
};

class ProgressBar extends React.Component<Props> {
  render() {
    const fractionalPosition =
      this.props.progress.position + this.props.progress.offset;
    const progressBarSize =
      (fractionalPosition / (this.props.numberOfPages - 1)) * 300;
    const progressInt = parseInt(progressBarSize);
    console.log('asgjkl', progressBarSize);
    console.log('asgjkl', progressInt);
    return (
      <View style={[styles.progressBarContainer]}>
        <View style={[styles.progressBar, {width: progressInt}]} />
      </View>
    );
  }
}

ProgressBar.defaultProps = {
  progress: {
    position: 0,
    offset: 0,
  },
};

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 10,
    margin: 10,
    width: 300,
    borderColor: '#eeeeee',
    borderWidth: 2,
  },
  progressBar: {
    alignSelf: 'flex-start',
    flex: 1,
    backgroundColor: '#000000',
  },
});


export default ProgressBar;
