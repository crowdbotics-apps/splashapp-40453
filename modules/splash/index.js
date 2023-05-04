import { StyleSheet } from "react-native";
import React, { useEffect, useContext } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { OptionsContext } from "@options";

const Splash = ({
  duration,
  onDurationEnd
}) => {
  const options = useContext(OptionsContext);

  const handleDurationEnd = () => {
    setTimeout(() => {
      options.hide();
    }, 5000);

    if (onDurationEnd) {
      onDurationEnd();
    }

    if (options.onDurationEnd) {
      options.onDurationEnd();
    }
  };

  useEffect(() => {
    if (duration || options.duration) {
      setTimeout(() => {
        handleDurationEnd();
      }, duration || options.duration);
    } else {
      handleDurationEnd();
    }
  }, []);
  return <View style={_styles.kthJlEvn}></View>;
};

Splash.propTypes = {
  duration: PropTypes.number,
  onDurationEnd: PropTypes.func
};
export default {
  title: "Splash",
  navigator: Splash
};

const _styles = StyleSheet.create({
  kthJlEvn: {
    width: "100%",
    height: "100%",
    backgroundColor: "red"
  }
});