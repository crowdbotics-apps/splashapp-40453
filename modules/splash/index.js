import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import SplashScreen from "react-native-splash-screen";

const Splash = ({
  duration,
  onDurationEnd
}) => {
  const handleDurationEnd = () => {
    SplashScreen.hide();

    if (onDurationEnd) {
      onDurationEnd();
    }
  };

  useEffect(() => {
    if (duration || 5000) {
      setTimeout(() => {
        handleDurationEnd();
      }, duration || 5000);
    } else {
      handleDurationEnd();
    }
  }, []);
  return <View style={_styles.skPMOkMc}></View>;
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
  skPMOkMc: {
    width: "100%",
    height: "100%",
    background: "blue"
  }
});