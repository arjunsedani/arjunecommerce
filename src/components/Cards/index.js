// import React from 'react';
// import { View } from "react-native";

// import { containerStyles } from './styled';

// type ImaageCardProps = {
//   soucrce: FlexDirection,
//   alignItems: string,
//   justifyContent: string,
//   flexWrap: string,
//   flex: number
// };

// type TouchProps = {
//   width: number,
//   height: number,
//   justifyContent?: string,
//   alignItems?: string
// };

// export const ImageCard = () => {
//   return (
//     <ImageBackground
//       source={{
//         uri: "https://facebook.github.io/react-native/img/opengraph.png"
//       }}
//       style={containerStyles.container}
//     >
//       <Text>Inside</Text>
//     </ImageBackground>
//   );
// };
// //   return <View style={containerStyles.container} />;
// // };

// export const FlexContainer = (props: FlexProps) => {
//   const { flexDirection, alignItems, justifyContent, flex, flexWrap } = props;
//   return (
//     <View
//       {...props}
//       style={
//         containerStyles({
//           flexDirection,
//           alignItems,
//           justifyContent,
//           flex,
//           flexWrap,
//         }).flexcontainer
//       }
//     />
//   );
// };

// export const TouchableContainer = (props: TouchProps) => {
//   const { width, height, justifyContent, alignItems } = props;
//   return (
//     <View
//       style={
//         containerStyles({
//           width,
//           height,
//           alignItems,
//           justifyContent,
//         }).touchablecontainer
//       }
//     />
//   );
// };
