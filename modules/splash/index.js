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
    options.hide();

    if (onDurationEnd) {
      onDurationEnd();
    }

    if (options.onDurationEnd) {
      options.onDurationEnd();
    }
  };

  useEffect(() => {
    if (5000) {
      setTimeout(() => {
        handleDurationEnd();
      }, 500);
    } else {
      handleDurationEnd();
    }
  }, []);
  return <View style={_styles.nZxKgExR}>
    </View>;
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
  },
  nZxKgExR: {
    width: "100%",
    height: "100%",
    backgroundColor: "red"
  }
});