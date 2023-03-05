import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation, onLayoutRootView }) {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };

  const onSubmit = () => {
    setState(initialState);
    navigation.navigate("Home");
    keyboardHide();
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
                marginTop: isShowKeyboard ? 150 : 250,
              }}
            >
              <Text style={styles.title}>Log in</Text>
              <View
                style={{
                  ...styles.form,
                  width: "90%",
                }}
              >
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
                    <Text style={styles.showPassword}>Show password</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.button}
                  onPress={onSubmit}
                >
                  <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.bottomTextContainer}
                  onPress={() => navigation.navigate("Registration")}
                >
                  <Text style={styles.bottomText}>
                    Have no account?{" "}
                    <Text style={{ color: "#ff6347" }}>Sign up</Text>
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
    height: 400,
    paddingTop: 30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontFamily: "RobotoBold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 32,
  },
  form: {
    flex: 1,
  },
  input: {
    height: 50,
    padding: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: "RobotoRegular",
    fontSize: 16,
  },
  showPassword: {
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
