import React from "react";
import { StatusBar } from "expo-status-bar";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const LandingScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={require("../images/logo_(2).png")} />
        <Image
          source={require("../images/Mask_group.png")}
          style={{ height: heightPercentageToDP(26), marginTop: -20 }}
        />
      </View>
      <View style={styles.middleImage}>
        <Image
          source={require("../images/logo_(1).png")}
          style={styles.image}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>
          Sparkle & Shine Transform Your Drive with Every Wash!
        </Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("RegisterScreen")}
        >
          <Text style={styles.buttonText}>Let's Start</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={{ color: "gray" }}>Already have an account?</Text>
        <Text
          onPress={() => navigation.navigate("LoginScreen")}
          style={{ fontWeight: "500", textDecorationLine: "underline" }}
        >
          Sign in
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: heightPercentageToDP(26),
  },
  middleImage: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    height: heightPercentageToDP(35),
    width: heightPercentageToDP(50),
  },
  textView: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 90,
  },
  text: {
    color: "gray",
    textAlign: "center",
    width: widthPercentageToDP(80),
    fontSize: 23,
    fontWeight: "500",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: widthPercentageToDP(80),
    height: 60,
    backgroundColor: "#90bafc",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 23,
    fontWeight: "500",
  },
  textContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
});
export default LandingScreen;
