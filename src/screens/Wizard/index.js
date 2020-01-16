/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
import React, {useState, useRef} from 'react';
import {ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Spacing,
  Button,
  Input,
  ImageBasedCard,
  HalfImageCard,
  HorizontalScrollContainer,
  TopBar
} from '../../components';
import ViewPager from '@react-native-community/viewpager';
import ProgressBar from './ProgressBar';

type Props = {
  navigation: {
    navigate: (screen: string) => {},
  },
};
const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    // backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
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

function Wizard(props: Props) {
  const pages = [0, 1, 2, 3, 4];
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('');
  const [page, setPage] = useState();
  const [scrollEnabled, setscrollEnabled] = useState(true);
  const viewPager = useRef(null);
  const [progress, setprogress] = useState({position: 0, offset: 0});
  const [scrollState, setscrollState] = useState('idle');

  const go = (page: number) => {
    viewPager.current.setPage(page);
  };

  const showDatePicker = () => {
    setShow(true);
    setMode('date');
  };

  const changeValue = () => {
    setShow(false);
  };

  const showTimePicker = () => {
    setShow(true);
    setMode('time');
  };

  const move = (delta: number) => {
    let pageNo = page + delta;
    go(pageNo);
  };

  const onPageScroll = (e: PageScrollEvent) => {
    setprogress({
      position: e.nativeEvent.position,
      offset: e.nativeEvent.offset,
    });
  };

  const onPageScrollStateChanged = (e: PageScrollStateChangedEvent) => {
    setscrollState(e.nativeEvent.pageScrollState);
  };

  const onPageSelected = (e: PageSelectedEvent) => {
    setPage(e.nativeEvent.position);
  };

  return (
    <SafeAreaView style={styles.container}>
       <TopBar
        title="Summer Wear"
          renderLeftContainer={() => <AntDesign name="dashboard" size={25} color="#808080" />}
          renderRightContainer={() => <AntDesign name="poweroff" size={25} color="#808080" />}
          renderExtremeRightContainer={() => (
            <MaterialIcons name="widgets" size={25} color="#808080" />
          )}
        />
      <View style={styles.progress}>
        <Text style={styles.buttonText}>
          {' '}
          Page {page + 1} / {pages.length}{' '}
        </Text>
        <ProgressBar
          numberOfPages={pages.length}
          size={300}
          progress={progress}
        />
      </View>
      <ViewPager
        style={styles.viewPager}
        initialPage={0}
        scrollEnabled={scrollEnabled}
        onPageScroll={event => onPageScroll(event)}
        onPageSelected={event => onPageSelected(event)}
        onPageScrollStateChanged={event => onPageScrollStateChanged(event)}
        pageMargin={10}
        orientation="horizontal"
        transitionStyle="scroll"
        ref={viewPager}>
        <View key="1">
          <Spacing hSpacing={20} vSpacing={10}>
            <Text>First Name</Text>
            <Input
              placeholder="First Name"
              onChangeText={firstName => setfirstName({firstName})}
            />
            <Spacing vSpacing={10} />
            <Text>Last Name</Text>
            <Input
              placeholder="Last Name"
              onChangeText={lastName => setlastName({lastName})}
            />
            <Spacing vSpacing={10} />
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                alignContent: 'flex-start',
              }}>
              <Button
                // primary
                outlined
                text="Show Date"
                onPress={() => showDatePicker()}
                title="Show date picker!"
              />
            </View>
            <Spacing vSpacing={10} />
            <View>
              <Button
                primary
                text="Show Time"
                onPress={() => showTimePicker()}
                title="Show time picker!"
              />
            </View>
          </Spacing>
        </View>
        <View key="2">
          
          <Text>How to Videos</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={10}>
            <HalfImageCard
              source={{
                uri:
                  'https://www.wellandgood.com/wp-content/uploads/2018/02/Ionic_Adidas_Female_Plank_0689.jpg',
              }}
              title="Walking Lunges"
              // subtitle="Sub title text"
            />
            <Spacing hSpacing={10} />
            <HalfImageCard
              source={{
                uri:
                  'https://bizimages.withfloats.com/actual/5cc7a4625af8df0001797180.jpg',
              }}
              title="Walking Lunges"
              // subtitle="Sub title text"
            />
            <Spacing hSpacing={10} />
            <HalfImageCard
              source={{
                uri:
                  'https://bizimages.withfloats.com/actual/5cc7a4625af8df0001797180.jpg',
              }}
              title="Walking Lunges"
              // subtitle="Sub title text"
            />
          </ScrollView>
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
      <Spacing hSpacing={20} vSpacing={10}>
        <View style={styles.buttons}>
          <Button
            text="Prev"
            outlined
            enabled={page > 0}
            onPress={() => move(-1)}
          />
          <Button
            text="Next"
            outlined
            enabled={page < pages.length - 1}
            onPress={() => move(1)}
          />
        </View>
      </Spacing>
    </SafeAreaView>
  );
}

export default Wizard;
