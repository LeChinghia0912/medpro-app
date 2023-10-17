import React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/medpro.png")} />

        <View>
          <View>
            <Text
              style={{
                color: "#1da1f2",
                fontWeight: "500",
                fontSize: 30,
                marginTop: 10,
                textAlign: "center",
              }}
            >
              Đăng nhập
            </Text>
          </View>
          <View>
            <Text style={styles.textPhone}>Thay số điện thoại?</Text>
          </View>
        </View>
        {/* view input */}
        <View style={styles.input}>
          <View>
            <Text style={{ fontStyle: "italic" }}>Số điện thoại</Text>
            <TextInput
              style={styles.phoneInput}
              placeholder="Nhập số điện thoại"
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontStyle: "italic" }}>Mật khẩu</Text>
            <TextInput
              style={styles.passwordInput}
              placeholder="Nhập mật khẩu"
            />
          </View>
        </View>

        {/* View Action */}
        <View style={styles.action}>
          <BouncyCheckbox
            size={25}
            fillColor="red"
            unfillColor="#FFFFFF"
            text="Ghi nhớ"
            iconStyle={{ borderColor: "red" }}
            innerIconStyle={{ borderWidth: 2 }}
            textStyle={{ fontFamily: "JosefinSans-Regular" }}
            onPress={(_isChecked: boolean) => {}}
          />
          <Text style={styles.forgotPasswordText}>Quên mật khẩu</Text>
        </View>
        <View style={styles.buttonAction}>
          <View style={styles.btnDangNhap}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("HomePage");
              }}
            >
              <Text style={{ color: "white" }}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btnDangKy}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={{ color: "black" }}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1eff2",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  logo: { justifyContent: "center", width: 250, height: 80 },
  textPhone: {
    left: 120,
    color: "blue",
  },
  input: {},
  phoneInput: {
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    fontSize: 16,
    fontStyle: "italic",
  },
  passwordInput: {
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    fontSize: 16,
    fontStyle: "italic",
    width: 350,
  },
  action: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    width: 350,
  },
  forgotPasswordText: {
    marginLeft: 160,
    color: "blue",
  },
  btnDangNhap: {
    width: 350,
    alignItems: "center",
    backgroundColor: "#1da1f2",
    padding: 15,
    borderRadius: 10,
  },
  btnDangKy: {
    marginTop: 15,
    width: 350,
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    borderColor: "#1da1f2",
    borderWidth: 2,
  },
  buttonAction: {
    padding: 15,
    marginTop: 15,
  },
  button: {
    color: "black",
    fontSize: 17,
  },
});
