import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
// import "react-native-gesture-handler";
export const LoadingImage = () => {
  const styles = StyleSheet.create({
    animation: {
      width: 300,
      height: 150,
      aspectRatio: 0.5,
    },
  });
  return (
    <View>
      <LottieView
        // wylaczylam te regule poniewaz lottie nie dziala z uri
        // eslint-disable-next-line global-require
        source={require("../assets/dog-walking.json")}
        style={styles.animation}
        autoPlay
        loop
      />
    </View>
  );
};
