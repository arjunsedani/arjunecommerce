import React from 'react';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import {createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  createReduxContainer,
  createNavigationReducer,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';
import rootReducer from './src/redux/reducers';
import currentUser from './src/redux/reducers/currentUser';
import counter from './src/redux/reducers/counter';
// import {createEpicMiddleware} from 'redux-observable';
import thunk from 'redux-thunk';
import {
  Home,
  List,
  Profile,
  Splash,
  Login,
  Zomato,
  Wizard,
  Instagram
} from './src/screens';
// import ViewPagerExample from './src/screens/ViewPager/ViewPagerExample';

const Tabs = createBottomTabNavigator(
  // const AppNavigator = createBottomTabNavigator(
  {
    Instagram,
    Zomato,
    List,
  },
  {
    initialRouteName: 'Instagram',
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Instagram') {
          iconName = `tasks`;
          return <FontAwesome name={iconName} size={25} color={tintColor} />;
        }
        if (routeName === 'Zomato') {
          iconName = `medal${focused ? '' : ''}`;
          return <Ionicons name="ios-appstore" size={25} color={tintColor} />;
        }
        if (routeName === 'List') {
          iconName = `graph`;
          return <Ionicons name="ios-stats" size={25} color={tintColor} />;
        }
      },
      tabBarOptions: {
        activeTintColor: '#29ccc4',
        inactiveTintColor: 'gray',
        style: {
          // backgroundColor: 'black',
          // borderTopColor: 'transparent'
        },
      },
    }),
  },
);

const AppNavigator = createSwitchNavigator(
  {
    SplashPage: {screen: Splash},
    FormPage1: {screen: Tabs},
    // FormPage1: {screen: Form},
  },
  {
    initialRouteName: 'SplashPage',
  },
);

// const AppNavigator = createSwitchNavigator(
//   {
//     SplashPage: {screen: Splash},
//     LoginPage: {screen: Login},
//     Drawer: {screen: DrawerNavigator},
//   },
//   {
//     initialRouteName: 'SplashPage',
//   },
// );

// navigation reducer for handing all types of navigators
const navReducer = createNavigationReducer(AppNavigator);

// Combine Reducer for navigation reducer with other reducer
const appReducer = combineReducers({
  nav: navReducer,
  currentUser,
  counter
});

// Note: createReactNavigationReduxMiddleware must be run before createReduxContainer
// Like thunk the following redux middleware created for react navigation
const middleware = createReactNavigationReduxMiddleware(state => state.nav);

// creation for epic middleware used for redux-observable
// const epicMiddleware = createEpicMiddleware();

// store combining reducer(for both navigation n another) with epics redux thunk and react-navigation middle
const store = createStore(appReducer, applyMiddleware(middleware, thunk));

// Action to run epics and execute
// epicMiddleware.run(rootEpic);

// Container between AppNavigator i.e UI and redux layer for react-navigation
const App = createReduxContainer(AppNavigator);
const mapStateToProps = state => ({
  state: state.nav
});
const AppWithNavigationState = connect(mapStateToProps)(App);

export default () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);
