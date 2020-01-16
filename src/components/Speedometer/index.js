import React, { Component } from "react";
import { View, Image, Animated, Easing, Text } from "react-native";
import PropTypes from "prop-types";

// Utils
import calculateDegreeFromLabels from "./utils/calculate-degree-from-labels";
import calculateLabelFromValue from "./utils/calculate-label-from-value";
import limitValue from "./utils/limit-value";
import validateSize from "./utils/validate-size";

// Style
import style, { width as deviceWidth } from "./style";

class Speedometer extends Component {
  constructor(props) {
    super(props);
    this.speedometerValue = new Animated.Value(props.defaultValue);
  }

  render() {
    const {
      value,
      size,
      minValue,
      maxValue,
      easeDuration,
      allowedDecimals,
      labels,
      needleImage,
      wrapperStyle,
      outerCircleStyle,
      halfCircleStyle,
      imageWrapperStyle,
      imageStyle,
      innerCircleStyle,
      labelWrapperStyle,
      labelStyle,
      labelNoteStyle
    } = this.props;
    const degree = 180;
    const perLevelDegree = calculateDegreeFromLabels(degree, labels);
    const label = calculateLabelFromValue(
      limitValue(value, minValue, maxValue, allowedDecimals),
      labels,
      minValue,
      maxValue
    );
    Animated.timing(this.speedometerValue, {
      toValue: limitValue(value, minValue, maxValue, allowedDecimals),
      duration: easeDuration,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();

    const rotate = this.speedometerValue.interpolate({
      inputRange: [minValue, maxValue],
      outputRange: ["-90deg", "90deg"]
    });

    const currentSize = validateSize(size, deviceWidth - 20);
    return (
      <View
        style={[
          style.wrapper,
          {
            width: currentSize,
            height: currentSize / 2
          },
          wrapperStyle
        ]}
      >
        <View
          style={[
            style.outerCircle,
            {
              width: currentSize,
              height: currentSize / 2,
              borderTopLeftRadius: currentSize / 2,
              borderTopRightRadius: currentSize / 2
            },
            outerCircleStyle
          ]}
        >
          {labels.map((level, index) => {
            const circleDegree = 90 + index * perLevelDegree;
            return (
              <View
                // key={level.name}
                style={[
                  style.halfCircle,
                  {
                    backgroundColor: level.activeBarColor,
                    width: currentSize / 2,
                    height: currentSize,
                    borderRadius: currentSize / 2,
                    transform: [
                      { translateX: currentSize / 4 },
                      { rotate: `${circleDegree}deg` },
                      { translateX: (currentSize / 4) * -1 }
                    ]
                  },
                  halfCircleStyle
                ]}
              />
            );
          })}
          <Animated.View
            style={[
              style.imageWrapper,
              {
                top: -(currentSize / 15),
                transform: [{ rotate }]
              },
              imageWrapperStyle
            ]}
          >
            <Image
              style={[
                style.image,
                {
                  width: currentSize,
                  height: currentSize
                },
                imageStyle
              ]}
              source={needleImage}
            />
          </Animated.View>
          <View
            style={[
              style.innerCircle,
              {
                width: currentSize * 0.9,
                height: (currentSize / 2) * 0.9,
                borderTopLeftRadius: currentSize / 2,
                borderTopRightRadius: currentSize / 2
              },
              innerCircleStyle
            ]}
          />
        </View>
        <View style={[style.labelWrapper, labelWrapperStyle]}>
          <Text style={[style.label, labelStyle]}>
            {limitValue(value, minValue, maxValue, allowedDecimals)}
          </Text>
          <Text
            style={[
              style.labelNote,
              { color: label.labelColor },
              labelNoteStyle
            ]}
          >
            {label.name}
          </Text>
        </View>
      </View>
    );
  }
}

Speedometer.defaultProps = {
  defaultValue: 50,
  minValue: 0,
  maxValue: 100,
  easeDuration: 500,
  allowedDecimals: 0,
  labels: [
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#2ca4ff"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#2ca4ff"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor:  "#2ca4ff"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor:  "#2ca4ff"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor:  "#2ca4ff"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#2ca4ff"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#79c5ff"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#79c5ff"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#79c5ff"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#79c5ff"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#79c5ff"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#f5a623"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#f5a623"
    },
    {
      name: "Very weak",
      labelColor: "#ff5400",
      activeBarColor: "#f5a623"
    },
    {
      name: "So-so",
      labelColor: "#f4ab44",
      activeBarColor: "#f5a623"
    },
    {
      name: "Fair",
      labelColor: "#f2cf1f",
      activeBarColor: "#ff7c2e"
    },
    {
      name: "Strong",
      labelColor: "#14eb6e",
      activeBarColor: "#ff7c2e"
    },
    {
      name: "Unbelievably strong",
      labelColor: "#00ff6b",
      activeBarColor: "#ff7c2e"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#ff7c2e"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#ff7c2e"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#ff7c2e"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#ff7c2e"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#ff7c2e"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#ff7c2e"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#ff7c2e"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#CC6666"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#CC6666"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#CC6666"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#CC6666"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#EB4747"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#EB4747"
    },
    {
      name: "Very weak",
      labelColor: "#ff5400",
      activeBarColor: "#EB4747"
    },
    {
      name: "So-so",
      labelColor: "#f4ab44",
      activeBarColor: "#EB4747"
    },
    {
      name: "Fair",
      labelColor: "#f2cf1f",
      activeBarColor: "#EB4747"
    },
    {
      name: "Strong",
      labelColor: "#14eb6e",
      activeBarColor: "#E61919"
    },
    {
      name: "Unbelievably strong",
      labelColor: "#00ff6b",
      activeBarColor: "#E61919"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#E61919"
    },
    {
      name: "Pathetically weak",
      labelColor: "#ff2900",
      activeBarColor: "#E61919"
    },
    {
      name: "Very weak",
      labelColor: "#ff5400",
      activeBarColor: "#E61919"
    },
    {
      name: "So-so",
      labelColor: "#E61919",
      activeBarColor: "#E61919"
    },
    {
      name: "Fair",
      labelColor: "#E61919",
      activeBarColor: "#E61919"
    },
    {
      name: "Strong",
      labelColor: "#E61919",
      activeBarColor: "#E61919"
    },
    {
      name: "Unbelievably strong",
      labelColor: "#E61919",
      activeBarColor: "#E61919"
    }
  ],
  needleImage: require("../../assets/images/speedometer-needle.png"),
  wrapperStyle: {},
  outerCircleStyle: {},
  halfCircleStyle: {},
  imageWrapperStyle: {},
  imageStyle: {},
  innerCircleStyle: {},
  labelWrapperStyle: {},
  labelStyle: {},
  labelNoteStyle: {}
};

Speedometer.propTypes = {
  value: PropTypes.number.isRequired,
  defaultValue: PropTypes.number,
  size: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  easeDuration: PropTypes.number,
  allowedDecimals: PropTypes.number,
  labels: PropTypes.array,
  needleImage: PropTypes.any,
  wrapperStyle: PropTypes.object,
  outerCircleStyle: PropTypes.object,
  halfCircleStyle: PropTypes.object,
  imageWrapperStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  innerCircleStyle: PropTypes.object,
  labelWrapperStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  labelNoteStyle: PropTypes.object
};

export default Speedometer;

