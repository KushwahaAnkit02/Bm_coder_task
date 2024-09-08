import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { handleLigin } from "./ApiHandle";

const LoginScreen = ({ navigation }) => {
  const [details, setDetails] = useState({
    phone: "",
    password: "",
  });

  const handleSignIn = async () => {
    if (details?.phone.length !== 0 || details?.password.length !== 0) {
      const res = await handleLigin(details);
      if (res.status) {
        navigation.replace("HomeScreen", res?.data);
      }
    } else {
      Alert.alert("warning", "all the fields are required");
    }
  };

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.upperImage}>
        <Image
          source={require("../images/logo_(1).png")}
          style={{ height: hp(18), width: wp(60) }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.heading}>Sign In</Text>
        <Text style={styles.subHeading}>
          Hi! Welcome back, you have been missed
        </Text>
        <View style={styles.form}>
          <View style={styles.formContent}>
            <Text style={styles.formText}>Phone number</Text>
            <View style={styles.inputs}>
              <Feather name="phone" size={wp(5)} color="gray" />
              <TextInput
                onChangeText={(phone) =>
                  setDetails({ ...details, phone: phone })
                }
                value={details?.phone}
                style={styles.input}
                placeholder="Enter your number"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.formContent}>
            <Text style={styles.formText}>Password</Text>
            <View style={styles.inputs}>
              <Feather name="lock" size={wp(5)} color="gray" />
              <TextInput
                onChangeText={(password) =>
                  setDetails({ ...details, password: password })
                }
                value={details?.password}
                style={styles.input}
                placeholder="password"
                keyboardType="text"
                secureTextEntry
              />
              <Feather name="eye" size={wp(5)} color="gray" />
            </View>
          </View>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>or</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="google" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="apple1" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: hp(15),
        }}
      >
        <Image
          source={require("../images/Mask_group.png")}
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            top: -10,
            width: wp(40),
            height: hp(20),
            transform: [{ rotate: "180deg" }],
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.subText}>Don't have an account?</Text>
          <Text
            onPress={() => navigation.navigate("RegisterScreen")}
            style={styles.signUpText}
          >
            Sign Up
          </Text>
        </View>

        <Text style={styles.footerText}>
          By login or sign up, you agree to our terms of use and privacy policy
        </Text>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  upperImage: {
    height: hp(20),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(10),
  },
  container: {
    height: hp(60),
    padding: wp(5),
  },
  heading: {
    fontSize: wp(8),
    fontWeight: "bold",
  },
  subHeading: {
    color: "gray",
    marginVertical: hp(1),
  },
  form: {
    marginTop: hp(1),
    marginBottom: hp(2),
  },
  formContent: {
    height: hp(10),
    justifyContent: "space-around",
    marginBottom: hp(1),
  },
  input: {
    paddingHorizontal: wp(2),
    height: hp(6),
    width: wp(70),
    fontSize: wp(4),
    marginLeft: wp(2),
  },
  formText: {
    fontSize: wp(4),
  },
  inputs: {
    height: hp(6),
    paddingLeft: wp(2),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    width: wp(90),
  },
  forgotPasswordText: {
    color: "#000",
    fontWeight: "500",
    textDecorationLine: "underline",
    alignSelf: "flex-end",
    marginTop: hp(1),
    position: "relative",
    top: -15,
  },
  button: {
    height: 60,
    backgroundColor: "#90bafc",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  buttonText: {
    fontSize: wp(6),
    fontWeight: "500",
  },
  orText: {
    textAlign: "center",
    marginVertical: hp(1),
    fontSize: wp(4),
    color: "gray",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialButton: {
    height: hp(6),
    width: wp(12),
    borderWidth: 1,
    borderColor: "#A3CFFF",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: wp(2),
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  subText: {
    color: "#000000B2",
  },
  signUpText: {
    fontWeight: "500",
    textDecorationLine: "underline",
    marginLeft: wp(2),
  },
  footerText: {
    textAlign: "center",
    marginTop: hp(2),
    color: "#808080",
    fontWeight: "500",
  },
});

export default LoginScreen;
