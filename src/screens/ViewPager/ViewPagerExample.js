/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

import * as React from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';

import ViewPager from '@react-native-community/viewpager';
import {Button} from '../../components/Button';
import {LikeCount} from './LikeCount';
import {ProgressBar} from './ProgressBar';
type State = {
  page: number,
  animationsAreEnabled: boolean,
  scrollEnabled: boolean,
  progress: {
    position: number,
    offset: number,
  },
  scrollState: PageScrollState,
  dotsVisible: boolean,
};

export default class ViewPagerExample extends React.Component<*, State> {
  viewPager: React.Ref<typeof ViewPager>;

  constructor(props: any) {
    super(props);

    const pages = [0, 1,2,3,4];

    this.state = {
      page: 0,
      animationsAreEnabled: true,
      scrollEnabled: true,
      progress: {
        position: 0,
        offset: 0,
      },
      pages: pages,
      scrollState: 'idle',
      dotsVisible: false,
    };
    this.viewPager = React.createRef();
  }

  onPageSelected = (e: PageSelectedEvent) => {
    this.setState({page: e.nativeEvent.position});
  };

  onPageScroll = (e: PageScrollEvent) => {
    this.setState({
      progress: {
        position: e.nativeEvent.position,
        offset: e.nativeEvent.offset,
      },
    });
  };

  onPageScrollStateChanged = (e: PageScrollStateChangedEvent) => {
    this.setState({scrollState: e.nativeEvent.pageScrollState});
  };

  move = (delta: number) => {
    const page = this.state.page + delta;
    this.go(page);
  };

  go = (page: number) => {
    if (this.state.animationsAreEnabled) {
      /* $FlowFixMe we need to update flow to support React.Ref and createRef() */
      this.viewPager.current.setPage(page);
    } else {
      /* $FlowFixMe we need to update flow to support React.Ref and createRef() */
      this.viewPager.current.setPageWithoutAnimation(page);
    }
  };

  renderPage(page: CreatePage) {
    return (
      <View key={page.key} style={page.style} collapsable={false}>
        {/* $FlowFixMe */}
        <Image style={styles.image} source={page.imgSource} />
        <LikeCount />
      </View>
    );
  }

  toggleDotsVisibility = () => {
    this.setState(prevState => ({dotsVisible: !prevState.dotsVisible}));
  };

  render() {
    const {page, pages, dotsVisible} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.progress}>
          <Text style={styles.buttonText}>
            {' '}
            Page {page + 1} / {pages.length}{' '}
          </Text>
          <ProgressBar
            numberOfPages={pages.length}
            size={300}
            progress={this.state.progress}
          />
        </View>
        <ViewPager
          style={styles.viewPager}
          initialPage={0}
          scrollEnabled={this.state.scrollEnabled}
          onPageScroll={this.onPageScroll}
          onPageSelected={this.onPageSelected}
          onPageScrollStateChanged={this.onPageScrollStateChanged}
          pageMargin={10}
          orientation="horizontal"
          transitionStyle="scroll"
          showPageIndicator={dotsVisible}
          ref={this.viewPager}>
          {/* {pages.map(p => this.renderPage(p))} */}
          <View key="1">
            <Text>First Name</Text>
          </View>
          <View key="2">
            <Text>Last Name</Text>
          </View>
          <View key="3">
            <Text>First Name</Text>
          </View>
          <View key="4">
            <Text>First Name</Text>
          </View>
          <View key="5">
            <Text>First Name</Text>
          </View>
        </ViewPager>
        <View style={styles.buttons}>
          {/* <Button text="Start" enabled={page > 0} onPress={() => this.go(0)} /> */}
          <Button
            text="Prev"
            outlined
            enabled={page > 0}
            onPress={() => this.move(-1)}
          />
          <Button
            text="Next"
            outlined
            enabled={page < pages.length - 1}
            onPress={() => this.move(1)}
          />
          {/* <Button
            text="Last"
            enabled={page < pages.length - 1}
            onPress={() => this.go(pages.length - 1)}
          /> */}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    // backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  progress: {
    flexDirection: 'row',
    height: 40,
    // backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: 'black',
  },
  scrollStateText: {
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 300,
    height: 200,
    padding: 20,
  },
  viewPager: {
    flex: 1,
  },
});
