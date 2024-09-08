import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const HomeScreen = ({ route, navigation }) => {
  const { name } = route?.params;
  return (
    <View style={styles.mainView}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome,{name}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("LoginScreen")}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    height: heightPercentageToDP(30),
    width: widthPercentageToDP(100),
    justifyContent: "space-around",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    height: 60,
    backgroundColor: "#90bafc",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 20,
    alignItems: "center",
    borderRadius: 50,
  },
  buttonText: {
    fontSize: widthPercentageToDP(6),
    fontWeight: "500",
  },
});
export default HomeScreen;
