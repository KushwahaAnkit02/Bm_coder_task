import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Feather from "@expo/vector-icons/Feather";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import Checkbox from "expo-checkbox";
import { handleRegister } from "./ApiHandle";

const RegisterScreen = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    password: "",
  });

  const handleSignUp = async () => {
    if (
      userDetails?.name?.length == 0 ||
      userDetails?.phone?.length == 0 ||
      userDetails?.password?.length == 0 ||
      !isChecked
    ) {
      Alert.alert("warning!", "all the fields are required");
    } else {
      const res = await handleRegister(userDetails);
      if (res.status) {
        navigation.navigate("HomeScreen", userDetails);
      } else {
        Alert.alert("Error!", res?.error?.phone[0]);
      }
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
        <Text style={styles.heading}>Sign Up</Text>
        <Text style={styles.subHeading}>
          Fill in the below form and add life to your car!
        </Text>
        <View style={styles.form}>
          <View style={styles.formContent}>
            <Text style={styles.formText}>Name</Text>
            <View style={styles.inputs}>
              <Feather name="user" size={wp(5)} color="gray" />
              <TextInput
                onChangeText={(name) =>
                  setUserDetails({ ...userDetails, name: name })
                }
                value={userDetails.name}
                style={styles.input}
                placeholder="Enter your name"
                keyboardType="text"
              />
            </View>
          </View>
          <View style={styles.formContent}>
            <Text style={styles.formText}>Phone number</Text>
            <View style={styles.inputs}>
              <Feather name="phone" size={wp(5)} color="gray" />
              <TextInput
                onChangeText={(phone) =>
                  setUserDetails({ ...userDetails, phone: phone })
                }
                value={userDetails.phone}
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
                  setUserDetails({ ...userDetails, password: password })
                }
                value={userDetails.password}
                style={styles.input}
                placeholder="password"
                keyboardType="text"
                secureTextEntry={showPassword ? true : false}
              />
              <Feather
                name={showPassword ? "eye-off" : "eye"}
                size={wp(5)}
                color="gray"
                onPress={() => setShowPassword(!showPassword)}
              />
            </View>
          </View>
        </View>
        <View style={styles.checkboxView}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={styles.checkboxText}>Agree with</Text>
          <Text style={styles.termsText}>Terms & conditions</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
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
            right: 0,
            bottom: 0,
            top: -10,
            width: wp(40),
            height: hp(20),
            transform: [{ rotate: "90deg" }],
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.subText}>Already have an account?</Text>
          <Text
            onPress={() => navigation.navigate("LoginScreen")}
            style={styles.signInText}
          >
            Sign in
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
  },
  form: {
    marginTop: hp(1),
    flex: 1,
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
  checkboxView: {
    flexDirection: "row",
    marginVertical: hp(2),
    width: wp(60),
    justifyContent: "space-between",
  },
  checkbox: {
    marginHorizontal: wp(2),
  },
  checkboxText: {
    fontWeight: "500",
  },
  termsText: {
    color: "gray",
    textDecorationLine: "underline",
  },
  button: {
    height: 60,
    backgroundColor: "#90bafc",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    zIndex: 999,
  },
  buttonText: {
    fontSize: wp(6),
    fontWeight: "500",
  },
  textContainer: {
    marginTop: hp(3),
    flexDirection: "row",
    justifyContent: "center",
  },
  subText: {
    color: "gray",
  },
  signInText: {
    fontWeight: "500",
    textDecorationLine: "underline",
    marginLeft: wp(2),
  },
  footerText: {
    textAlign: "center",
    marginTop: hp(1),
    color: "gray",
    fontWeight: "500",
  },
});

export default RegisterScreen;
