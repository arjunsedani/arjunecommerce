/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
import React, {useState, useRef, useEffect} from 'react';
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
  TopBar,
  Story,
  CarouselHooks,
} from '../../components';
import ViewPager from '@react-native-community/viewpager';
import {useSelector, useDispatch} from 'react-redux';
import allActions from '../../redux/actions';

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

function Instagram(props: Props) {
  const counter = useSelector(state => state.counter);
  const currentUser = useSelector(state => state.currentUser);

  const dispatch = useDispatch();

  const user = {
    firstName: 'Arjun',
    lastName: 'Sedani'
  };

  useEffect(() => {
    dispatch(allActions.userActions.setUser(user));
  }, []);
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
        renderLeftContainer={() => (
          <AntDesign name="dashboard" size={25} color="#808080" />
        )}
        renderRightContainer={() => (
          <AntDesign name="poweroff" size={25} color="#808080" />
        )}
        renderExtremeRightContainer={() => (
          <MaterialIcons name="widgets" size={25} color="#808080" />
        )}
      />
      {
        currentUser.loggedIn ? 
        <>
           <Text>Hello{currentUser.firstName}</Text>
          <Button onPress={() => dispatch(allActions.userActions.logOut())} text="Logout" />
        </> 
        : 
        <>
          <Text>Login</Text>
          <Button onPress={() => dispatch(allActions.userActions.setUser(user))} text="Login" />
        </>
        }
 

   <Text>Counter: {counter}</Text>
   <Button onPress={() => dispatch(allActions.counterActions.increment())} text="Increase Counter" />
   <Button onPress={() => dispatch(allActions.counterActions.decrement())} text="Decrease Counter" />
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
    </SafeAreaView>
  );
}

export default Instagram;
