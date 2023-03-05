import React, { useState, useCallback, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation, onLayoutRootView }) {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };

  const onSubmit = () => {
    setState(initialState);
    keyboardHide();
    console.log(state);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.imageBackground}
          source={require("../../assets/images/background.png")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.formBackground,
                marginTop: isShowKeyboard ? 40 : 150,
              }}
            >
              <View style={styles.avatar}>
                <Image
                  style={styles.avatarImage}
                  source={require("../../assets/images/avatar.jpg")}
                />
                <TouchableOpacity>
                  <Image
                    style={styles.addButton}
                    source={require("../../assets/images/add.png")}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.title}>Registration</Text>
              <View
                style={{
                  ...styles.form,
                  width: "90%",
                }}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  value={state.name}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, name: value }))
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  value={state.email}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />

                <View style={{ position: "relative" }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={state.password}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />

                  <TouchableOpacity>
                    <Text style={styles.passwordInput}>Show password</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.button}
                  onPress={onSubmit}
                >
                  <Text style={styles.buttonTitle}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.bottomTextContainer}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.bottomText}>
                    Already have an account?{" "}
                    <Text style={{ color: "#ff6347" }}>Sign in </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formBackground: {
    height: 535,
    paddingTop: 50,
    top: 50,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  avatar: {
    position: "absolute",
    top: -65,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    zIndex: -1,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  addButton: {
    position: "absolute",
    width: 25,
    height: 25,
    left: 107,

    bottom: 10,
    zIndex: 3,
  },
  title: {
    fontFamily: "RobotoBold",
    fontSize: 30,
    textAlign: "center",
    marginVertical: 20,
  },
  form: {
    flex: 1,
  },
  input: {
    height: 50,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: "RobotoRegular",
    fontSize: 16,
  },
  passwordInput: {
    paddingRight: 15,
    position: "absolute",
    top: -53,
    right: 0,
    color: "#1B4371",
    fontFamily: "RobotoRegular",
    fontSize: 16,
  },

  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 28,
    marginBottom: 15,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonTitle: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 20,
    color: "#fff",
    textAlign: "center",
  },
  bottomTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: {
    fontFamily: "RobotoRegular",
    color: "#1B4371",
    fontSize: 16,
  },
});
