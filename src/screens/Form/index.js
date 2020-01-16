import React, {useState, useEffect} from 'react';
import {
  AsyncStorage,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  Spacing,
  Button,
  Input,
  ImageBasedCard,
  HalfImageCard,
  HorizontalScrollContainer,
  TopBar,
  Avatar,
} from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch, useSelector } from "react-redux";
import {
  actions as activeuserActions,
  selectors as activeUserSelectors
} from '../../redux/activeUser';
// import ViewPager from '@react-native-community/viewpager';
import {Picker} from '@react-native-community/picker';
import Carousel from '../../components/Carousal/index';
import { cardStyleBase } from './styled';


type Props = {
  navigation: {
    navigate: (screen: string) => {},
  },
};

function Form(props: Props) {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('');
  const [page, setPage] = useState();
  const [gender, setGender] = useState();

  const dispatch = useDispatch();

  const activeUser = useSelector(state => state.activeUser);

  useEffect(() => {
    dispatch(activeuserActions.fetchUser());
  });

  const CARD_WIDTH = Dimensions.get('window').width * 0.8;
  const CARD_HEIGHT = Dimensions.get('window').height * 0.7;
  const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.9;

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

  // eslint-disable-next-line class-methods-use-this
  const storeToken = async (firstName, lastName) => {
    try {
      console.log('lastName', lastName);
      await AsyncStorage.setItem('userData', {
        lastName,
      });
    } catch (error) {
      // console.log('Something went wrong', error);
    }
  };

  const onButtonPress = () => {
    storeToken(firstName, lastName);
    props.navigation.navigate('FormPage2', {
      firstName: firstName,
      lastName: lastName,
    });
    setPage(2);
  };

  const styles = StyleSheet.create({
    viewPager: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
  });


  const healthCards = [
    { title: 'Wlaking Lunges', uri: 'https://www.wellandgood.com/wp-content/uploads/2018/02/Ionic_Adidas_Female_Plank_0689.jpg' },
    { title: 'Wlaking Lunges', uri: 'https://www.wellandgood.com/wp-content/uploads/2018/02/Ionic_Adidas_Female_Plank_0689.jpg' },
    { title: 'Wlaking Lunges', uri: 'https://www.wellandgood.com/wp-content/uploads/2018/02/Ionic_Adidas_Female_Plank_0689.jpg' },
    { title: 'Wlaking Lunges', uri: 'https://www.wellandgood.com/wp-content/uploads/2018/02/Ionic_Adidas_Female_Plank_0689.jpg' }
  ]


  

  const images = [
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBcXGBcXFRgYGRgdGBgaGBcXGhcYHSggGBolHRcYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EADoQAAEDAgMGAwcDBAAHAAAAAAEAAhEDIQQxQQUSUWFxgSKR8AYTMqGxwdFC4fEUUmJyByMkM4Kywv/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/EACYRAAMBAAICAgICAgMAAAAAAAABAhEDIRJBMVEEImFxE7EUI4H/2gAMAwEAAhEDEQA/APFEycJkYI6SScBaYJEcZUAFMC3NEjGRhSDU4CkAiSBbIgKUKTQpwiSAbINapbqI2mitoo1IDsb+gf7v3u6fd725vaF0THWEJrFa92cptw5p20StUgu0V201J1LVaFHDToiMwt/XkjUCnymaynojChx5rVw2DD6hkNa0BzokgQLhoJMm8CJnnKVd4IAbNpt19DyC1SY+T6MZ1LkrdHByJg5TlaJIt3srDcPJJAcYALvCbcZE5Sc+i0W1G7+81loAhxmzRF3ZkduGgWzK0yreGMGXg9rXlAfTvzWrjKWZEXMxEAfEAAdRc5WsOAQv6aSY8V+EHyBRNGKvZnvo2tJ8u6BUpLUcyEGrRnlrloscBKzLITOYrtbCwJ0nz6KGHpjeAdlIlKc4PmtKZTmmYsuk9qsDhaZp/wBM/flo3p0PBc/TMGMwglahlpy8AOYhFq16R3wGkGwIF7ATNh1JPdZ1Vl4W3x4tMm9eFeE7nSSTrc9+iJuFRcwhJcjNIJQnhOF2HECmIUimKxhDEJCEiEyw0UJJJBYaPCk0JuyLTZYmcvn0RJAsLi8DUpFoqMLS5oeAdWuyPQobGTknqVXOPicTAgSSYAyAnRFpTlxj1PdHCAtr0QLI66p2hS3U/uymZgvRgIVhlKDB76/RTxOFa3d3Xh+80OMA+EnNhnUckXC0CdFsoC3gSnRk2VzC4M3Hoqxs7CkuABHmLea6als8QIiQDMa59lVMr5PO5efx6OYq7N3QCQUL3F11jsE0gkkggREa5rOp4MmV1T9ARzb8mVg6JutKlTaNJketVYr4EtNhmPx5J20C0RZcujne9lB+Hb/bfkc89D28uar1SKdiQMiDNxBy5FaGMlot8S5vabdXTP1SeS/H4KeGPL5NunTDjLCSMzFjpAJ42VrEYdgbutBc46yLRoOOuf2XL7J2l7t4vbnrxXWMaDcARE3OVkXHatHcsOHgJ+DlrZkSSQQdIG9YwZGU5SCJUaYaxjgQYkHMATl2z0icl1e0a+Hdhm5ioDmBzm9+q5DE0j4gN6cpvBBi3n2+5zW+jLjM7BuwgfvvYN1rBJE3zgXyzM34HWJqYWmwPBe6GtByF94Axrx1+Wiv0wTZocBHiGcxAzAtc84txsHFNIMfqBjxAOsZkgRYXmR1RP7OX0Z2IZJIsQHGDNuE7xAtlnGekqu+n4iLAxnJgwDe+vS05SrNZxgtaT4iN4buUHwwdTc8O+hNsuLny4iYAs2BYBgiwj4STbUZ5pTfY5LoyatP190E0oz/AG9Zq/isSIa2YgCYaLkTfPtpOaznGVjwZOhMPVDXAn1+UGtfmguKgXJTvrBijvSXdEY0G2qrSp0nwgVBtBhhD06/lRqNaLcE1QZXm3lySuc1vXpGd+wTm3UN1Hc1QQtBJgi1PHoqRCiUGBpg0kgpBAEOEQKDSiBNkBkmtRqLNFClxRqdimyhVMlu3ykeU+SLQpFxDRqYF/JQpm4VhjTNtNUefQp19lvE7KfTfu1WlhEEgjjcdldFEjdAGTeEZyZzM2II5usOLOxLnuD6pNQxckkzFoMX+ifDVi3Ui+UfW3II5WfJNy1r/X4LlJomW258bnOPhWrhJymOHPzVBrw7SNLQcuB42zm/dWsMSCBn9tU1MjtadBTpywNNxxiTP2VpmFAZEXMaIOzKxsTkRBIGQyMTqtqnT/YrW8I61HM46kZNunLilh/+26ac2jeyA/ey65mz2vvu3Sq7GaGEG1ycs+SB0mOmnm4eV7VrAOI5WPRZm1i1zGwb/qkZcIKsbU+I3v0WI8OB4hR09PZ45xIp+6ghegbDO/Qac2yRPMQfoQuQawH52jgu59g8NOGcDrUsejGA9B+Cj/H6sD8uv00K+kIJGtoPmP25hZFRnxX5X1PEWg/grrMbQmXCfDAvygCCTy5rDfh5MwYz3ZgHj07hWskhmbvlpmIJERwEcoufys6u0mN7KQLmLddJ/C13UZ04agec5eaEcMCCLZTk13SL5X5rGuhyZg1KjvE6b5wQO5+f7KOKOZkSREEl0RGvCMuhHBardnvcRvAva0Xa0aCZkQbcz+EvbH+lNRpwjXNbuDek2Jjhxjmk4NVLTmto4c0yASMgbGc7qg9ysVQq7mpFaVLPQNzlEpFGotFhckyItHL7pQwDCk1ErNc0iQQYkS2JByN85vfkmIj7GDBi0ib6FcjiTUXdhQoC6u4VtxabjVNlaJp4RrYXdZvEROWk24HsqBXYe0mDO6XOjwuAETG674YGUiDPRcg9qLmnxeAfj8vnOgnIaI9DKnZUhk4TAJ2lCGOERhUAiNTJAYagb5TyRqdv5j0UOmQBzU6g1VCXQh/Iag2/FaGCaJy4qthha3xGR9vNaVOg8fpMZWHqE2ZJeWgwpbpBLZEwdJiAQCLA8+cqeHaOvX1ZRpDThoddFcrOc93igboAGgtAHeAtaJ2wrqJkR1K0MPT1+SpufuncIuNZnlAgxGshXcHWDjHb8Ilgm9Oi2dSLgCbXM2yjX5rYpNJiAsnYFdocA/LgtfaG26OFu8yHfC1t3GOF8uZsh5KwnXF5NGnhG7h3p7KG2scAwvy3QXHsJXFY3/iDvSKVCOb3fZv5XMbU9p8RWBD3nd/tHhbbkM+8qXyW77LY4OTx8PRk7VdNSR3/AJWbWxUHRLF4okrPkkylNnpzPRfpVLyV6fsfDCjh2U5vugu6m8c9L8l5aTAW7sn2vfThtX/mMEC/xAcA7XofkncNqX2I/I46tfqd7iSRaInrF8zJyyQdrVRBbTiIAyz6T6zRH7doV2D3T94wPC4eIdR9xbmqFWZkZ8PQ7qxVvZFKa+TFrs8IsRqL5jpF+vVV6282QLGePDmM1ue7tBF1VrUg1rrA3kZ2ERca8soutHKjNwm0H0iTTJDjIdH6gRBCysW29loupmbIOJp2DuM+Yz+y7AliZg1aSpV2QTGWhiPktqtl3Pr1wWRiYJtkpuSSnjor05BtHDTX1miYmiW+IA7pi4ndBIJAk5mJ+aC5yReYj1lCmY8tV3OcXOqEuIgGZBygG4yAA8wqoPXz0mY87pmotJq459BqdPgtbB1A3dkNMESSJMcoVGi3TjceuKM0TnAjsnx0S8nZ0O2qVStuRG6Sdwk2M3kkkg2gzOsWhchjqDmOc11iCRB5Ls8NtqnRLWNAr09y4c0DdeW3Icb/ABfVc/t8te73gd8WkZEW17JnMlS32T/i1c14tdejn3IaNUHP11QYULPVkYJ4TBSWIIdqLTKEERidADLDFcoU96B59EDDUi4hou4kNA1JJj8IrQWkg5gwRzCshInvS4ymWvgC4OR+nNbDMYXAgE30y/lYgrW/ZW8DUvOvLTmnSlpHyTq1mjRolp3iATxNx+JWtQq0yQC3O/n/AAqWHq2BkknU8uKLUrEiDeMkfjhLWsntBrd87gtpefX7qNB0EcvWSDona7nwSqXYyZ6w6DZOKDHyfhzPTUdVzm2tpl73O45AmYAyCsjEHdjjn2usXEsMmQpuZ+h3BxpNs2fZmnRq1S2qJBaS25A3heLZyJ8lj7cwxpVnsE7sy3/U3H47IdPE+7c1wzaZ8swtn2jIe1lVuURPEG49c0rE4/lDu55N9M5d7ImVZ2dsJ1dlR7bbo8P+Ts93y+oQDTdVe1jLucYH5PIZrtsRiaWDZSpDIndJy/2qHuRPVZxwn2/gZyW5xL5PMX1Tqgur6rpfbbZnu6vvWjwVJJ5P188/Nc7g8M6rUZSaPE9waO5z7Z9km5cvCnjpVPkTp40iCCQQbEG47r0P2Q2379u69w94zj+tvHqJg9iuH9qNiDCVGtFTfDgSBEOAmBPW/kq2xsU9jwWGHC47adxIRxdcd4xfLxTyxsnsbGsMh5iJ/VE3tms/EVmwW6zIg2Qm1Q9jXiIe0OHIG9+d1VqC+a9JM8zCNKkHHTib6etFT2pAsIgE34qwRr+38KjtCgWgGDDpg6GDBgwtb6DlazBxD1QqLRqUZKo16d1LelcNFVzVANV2lRJPRWaWDgi03tw62zSv8bYx8iRn0qU9Vt4LAgNeSze3QJmYFiTkenmo4Z1MXDb8JtlFrTqj1cS1tOo2S4utwAvJdzNoTZhLtk/JyVXSKT6xa4+ANtkRBvcG/bseaG6rvElxubz65oDn/uoOtZL8hnig1V3DIq5T2qKbKtP3THh7d1pcLsv8TTxWaavr7IVd83Q09WDePZaaK7yhKTlGYSGUIScFMFILUjmOEVgSa1OwKiZYtsIxXcNTkjmVUpGIsM5g5d1pYKoN4QItx5Qb/NW8M6+xHJ8BBhSMwbZq3QpetFcqUZA8QPCCrbMBAEmJvKuXEkQ1yfZVoZ27/RalHDhwsYOs8eXy80PBYbxwPJbNTZ8BpDDnJdvZCwjdjjJlBTmXjFPv4M04SOFu8qm9sFaFWqZFv36qHuxMrr40/g2W/ZRqG6rVxa6u4o5x6us6s/esvM5+mUwZmO5ZLb2E8VcO+kSLWHQ3aexB+SwMaCMylsfHGnVadD4T0P7wkRWV2UVPlPRt+ytAio+o+25vN7/q8h/7LF2xtL373P0yaOQ/Nz3W9tjFinQeBm+W9d7P5Sgezmymmi4vF6ogf4t0I6kT2amOH1xr+wJr5t/0F2dVGMwbqLz/AMxgAB5i9N3eIPQrK9iKbG1K1WpZ1FuR/TM7zjzG7HcqvsOu7D4vcfaT7t3C/wADvOOzlt7d2AQzF1W232tdA/xO9UHQwD3WLaSrO0G8nZ3pnG7Z2gcRWfVP6jbk0WaPL7qvhTDgef8AKGCrFIBSfL0sxJYj0L2cpOfh2kGYLmnqDP0KvVcPu2Oeqxv+H1d5c+mw3gPAyyhrv/ldb/Qvc74YjU2XqcOOEzx+b9baMhrATcbv+okcNZgmPms2u2O0iF0owQmS4WPArBx9PxOgWvfunOcQE3rMnGAbtv4WS+lJW4cPvSI6XzPJZppRZJtaOisIU8Gd2YsCJPCQYB6/ZU5PErUaJbuzBExJz/CoVMO4HL5yPMIKn6Dmt+RqZtKDVKO0RIVOs/hzhKvpDIWsYuTbyCXoe8kuh6gI56EXJpUUDYxIRcowk4ppQDB1MFGxtWm4t93T3AGtBG8Xbzhm6+U8EBqZJlIK1FIQmFFYFXxoUwriJsCBAzMmYvcAaqzhHXAVYNV3DNi/LL1kruKHojkfRoYTFZSt7DO3ryCI6wAuUbUEytDCYws3mk8iJ4Hlmq5pfDI+Tj9o6XD12bwIJkXPC3zlbJxuU5HULiW4sA2Wu/aOWdgBnyulcnGqYlw0bONwzd0uEAj5i2ndYOOeMxYK1itpAhsiZAyMDh55LIxVS5WLVGMPjlgqlY8VScXAk5orqqDVqyCvM/IXZZHRTxpJF1W2ewuqsH+Qntc/IKWMrZBNga4YXOm4aQ3/AGJAnsJKkWeXZQt8TU9o6b3vpNH6pAHObnyPyVzbW2PdVKTGDwtALwNWxugDtJ6wtSiWlrahj4d4H+0EAnoYC4baWM97Ve/IE2HIZKvn/wCvtPt/6Fca8un6N720wYinXFw4bsjURLD5St/FPqP2c4xNT3ILukAvtxiVjez9QYnCuw9T9BjnEyw9jI7LcG1m08U2g4WfTLu8m3cAnsmRKe36rr/0CtWT9f6PL3AXTMcQru2cL7mvUpj4Q7w/6m7fkQqrCvMax4Xp6tOi9isf7nGUXzAc7cPR43RPcg9l61jtpBoBJaAcgBM/deGYd5ERoQR1FwvQK+O3o1keSu/Ex7vo838vi8qTNzF44OadJvP06LJxeIiBAMZxIn7XVd1zHS05cboFeqMgZHqyvb6JPDCw+s4T4fCLWuL8T+UDFYVpaHMAmXAxrlBiMs8kClVgxNjmrdXGBkubINhnbvAj0UOr2C00+jIrYZ2oI6j16KId1tF7CwFxgtcSfCG5gDWVpnEte0zYyCQMjOpGnVZOKeHEBoNpyvOuXJKtJIZx3TfwY1ayp1rfyD8wrmLbfroLwqNRh4KK2ehxoA4qMpyopDKUJMkksNGKiVIqKwIkFMBQUpTJBYVjgOam16ACpgqiLYDRaouRS7mVUa5EY66tjk6wW5LFMq1SbqckFj2hvP6RqhuqqhNJdiWmzQwnie0DUiB35rQ2nTNKo6m4+Nph2RE9QYNlzzKhEK9Rql5g6anzWzWsGoSRYdXNpTjFdO6qVX8UE1h6KGqxnKSy6oFHfVU1Dmm3+Kj5JTTGJAMabygUyrlUSFVeyF51LGPl9GtV2l/0zaQPiJId/qDIvzy7LBqGCrBKp1Dcrrt1m/0HxykaOwdqnD1m1NMnDi05/Y9ld9odqB2NNVhkMLILcjEEx3LlzqcOWLlpT4/zoThbp0vtrSBdTqjJzd09rt+RPkucYrOI2lUfTbTdG62ItewgX6KqwLea5u/KfZ0S5nGaGCZLgLrqWVIIIGUW+yxdiUo8RGXqPn8wtWYuPmrfxYydJOZ9h3VSFMCZkXnMZW0hVnP1+/qExrQOunJUvolpGjg2gOa833SDu/3XmLXHVQxFElxMgT4tBOv36lU6bhmtnAUpERJIIBkzBEZd5WfIi349lD3eQ3jujLiATcgTn30zTYemGh8sJ8Ph0AuLnUjotmlsdznNGkXM2ABOkiIv8lOvTaGbjZIE3JjPOOFwPlZC4Yr/ADrejj8XQMS4iLiSDbWLCfrErOxBnemBwgATcDJthlPZbmMpXsCDY6RPLSLi31VWtgSXEEEa3GWptczpmprkv4uRZ2c/WYc49eoQSFv7Xw5PiJzyE9BOQvxOqxHNU9ThZFpoEQmKkQopbGoiUgpu3d0RO9J3piItuxrxmeSjCwMaU8pgnARIwknaVEKTHR6nkmJgsnKcOQ5TpqsHAvvCiUyq6ILJ839gtBw/JFp1tPXq6qBykHp88gDkO4kzAJiSYEwBqeAuouqEmTr2UG1CJgkSIMEiRwMZhD3kLfZudF0xo6Ra8EfLl9kAuuoiok4rLnV0Yl2GJUHBDL04eo74wkiDwqdVsFXiUKq0FIqMGS8KUqTWIgpKbaSXgbpEX0og6FRpUyTAC0MJBkd1cpNa2YF1RxcD5H/AD5MC4OGADkfNXquMljWxEZkZk8fsqjWg26fZKu2MxYR5fYr0/FzOIkpJvsJUdfgdQnruG95fT+VVoAki+v3UxfPglt9C6QelIMgxwhdJ7N1Ie1xFhbrwC5ltUCInnp5Hor2zsVuuE/zyWS8ZPzR5S0eg4yoSMriQYjdEdOoE81hVaJeLEDxWj1Yq9hcR76mW2F98RIvFx+OiqVHkNH+OQmJMmAZGUkiBwHVOddHmTHi8M2rgXMcMsxAsSQTfuouwzfc1H+83S2PARckTYScsjpnfKVYq4zwEwG8cnHMGd7O/ris8Yc1HNIDb2aJzgzHEC+Zt81NZfxp+zJx7XPaxx1sP/ExqADbgSMphY2IoEer+S6bEuY22YbHhBlrrHfjhENA4zwXPY94JJAgTlcxxA5T9rnMoqS/ioz3hCif5HS055ojyhKai2R6YBIDjDZEmJgTcxrZSxIaHuDHF7QSGuIgkCwMaW0Qk6APeh0gl6hNKJGEklFOtTMwklKjKdomOfEgDzOSNUdhKVNh45IYKdMVAtE2lTY4aoQSlMmsMwmXJkxUUXk2dgdp9ef7IhFkCUt/iqZpJA4OSmDlGUyRyrUEgm8koNKKCFLSNIwpJNalK5QYTw43SrLal75KqxTL1XwfqgX2WvfGZ4qdWsSZzkXVIuRKTwneW9C2ixRH2/hWcHUBMHz/lUmVi2YUGvOaDySF1OmhjabWnw5H5RYj1yUcM/Qm3n6/dVTWKJReLzmRbklN6wHPR0mA2t7sGJNrkG4EAWGhkzKt1WuqOJpOBGTi5wByuQ0mwXGiuRwSNUrHyCv8AjrdR3FOkyk071QdS4RFpEZk2CzMftVkFtFu6CPiiHOkxAm+7mFh4ChVrO3abS8xMDgFXxFRzTumbFD/kT6Dn8Zr9mWsRjYggi193S8jSxgRe2eSxqtaSp4msXXJ4fIR9lWLkq7ZXxwkM8oRUiVEpDY9IZJJOI1B84+yEIZOkktOEkkkuOFPr11STJLTCQKneJvGU6Wz+o80kkaZ2aKU8pJJiYA4cmKSSPTkKUgnSTE2cMlKdJFXwcRBU2lJJTaaIuTgpkkaZhNqRKSSf6BCQRY25JBJJd60yumOal59eSKHCEkkvQGhqNTdIdAMEGHCQY0I1CatUkzETJgCAJOQ5JJIWciBeo76SSUwkjQ2LtyrhX79Ew6CCc7HqqVfEGo8uc4AuMknISbmw72CSSD+Q9eZ6K9R8oUTZJJY2EkQSiUkkDDSGKSSSw4//2Q==',
    'http://alanwalker.no/wp-content/uploads/2019/05/AW8_OfficialArtwork_Square_1920x1920-1.jpg',
    'https://static.stereogum.com/uploads/2019/07/100000x100000-999-1-1564070990-640x640.jpg',
  ];

  return (
    <ScrollView style={styles.viewPager} showPageIndicator={true}>
      <TopBar
        title="Winter Wear"
        renderLeftContainer={() => (
          <AntDesign name="dashboard" size={25} color="#808080" />
        )}
        renderRightContainer={() => (
          <AntDesign name="poweroff" size={25} color="#808080" />
        )}
        renderExtremeRightContainer={() => (
         <Avatar initials="AS"/>
        )}
      />
      <Spacing hSpacing={20} vSpacing={10}>
        <Text>First Name</Text>
        <Input
          placeholder="First Name"
          onChangeText={lastName => setlastName({lastName})}
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
        {show && (
          <DateTimePicker
            value={new Date('2020-06-12T14:42:42')}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={() => changeValue()}
          />
        )}
        <Spacing vSpacing={10} />
        <Text>Select Gender</Text>
        <Picker
          selectedValue={gender}
          style={{height: 50, width: 200}}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
        <Spacing vSpacing={10} />
        <ImageBasedCard
          source={{uri: 'https://bit.ly/2ICqIyl'}}
          title="Test Message"
          subtitle="Sub title text"
        />
        <Spacing vSpacing={10} />
        <Spacing vSpacing={10} />
        <Carousel images={images} />
      </Spacing>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={10}
        horizontal // Change the direction to horizontal
        pagingEnabled // Enable paging
        decelerationRate={0} // Disable deceleration
        snapToInterval={CARD_WIDTH + 10} // Calculate the size for a card including marginLeft and marginRight
        snapToAlignment="center" // Snap to the center
        contentInset={{ // iOS ONLY
          top: 0,
          left: SPACING_FOR_CARD_INSET, // Left spacing for the very first card
          bottom: 0,
          right: SPACING_FOR_CARD_INSET // Right spacing for the very last card
        }}
        contentContainerStyle={{
          // contentInset alternative for Android
          paddingHorizontal:
            Platform.OS === 'android' ? 30 : 0, // Horizontal spacing before and after the ScrollView
        }}>

     {healthCards.map(healthCard => {
          return (
            <HalfImageCard
          source={{
            uri:
              healthCard.uri,
          }}
          title={healthCard.title}
          // subtitle="Sub title text"
        />
          );
        })}
      </ScrollView>
      <Spacing vSpacing={10} />
    </ScrollView>
  );
}



export default Form;
