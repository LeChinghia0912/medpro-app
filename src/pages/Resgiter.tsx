import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
const Resgiter = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.title}>Đăng kí</Text>
        </View>

        <View style={styles.layout}>
          <View>
            <View style={styles.inputName}>
              <Text style={styles.textName}>
                Họ và tên <Text style={{ color: "red" }}>*</Text>
              </Text>
              <View>
                <TextInput
                  style={styles.phoneInput}
                  placeholder="Nhập họ và tên"
                />
              </View>
            </View>
            <View style={styles.inputName}>
              <Text style={styles.textName}>
                Nhập số điện thoại <Text style={{ color: "red" }}>*</Text>
              </Text>
              <View>
                <TextInput
                  style={styles.phoneInput}
                  placeholder="Nhập số điện thoại"
                />
              </View>
            </View>
            <View style={styles.inputName}>
              <Text style={styles.textName}>
                Nhập mật khẩu <Text style={{ color: "red" }}>*</Text>
              </Text>
              <View>
                <TextInput
                  style={styles.phoneInput}
                  placeholder="Nhập Mật khẩu"
                />
              </View>
            </View>
            <View style={styles.inputName}>
              <Text style={styles.textName}>
                Xác nhận mật khẩu <Text style={{ color: "red" }}>*</Text>
              </Text>
              <View>
                <TextInput
                  style={styles.phoneInput}
                  placeholder="Nhập xác nhận mật khẩu"
                />
              </View>
            </View>
            <View style={styles.inputName}>
              <Text style={styles.textName}>
                CCCD/CMND <Text style={{ color: "red" }}>*</Text>
              </Text>
              <View>
                <TextInput
                  style={styles.phoneInput}
                  placeholder="Nhập CMND/CCCD"
                />
              </View>
            </View>
            <View style={styles.warring}>
              <Text style={{ color: "red" }}>Lưu ý</Text>
              <Text>
                Họ tên phải là tên trên các giấy tờ tùy thân như CMND/CCCD/Hộ
                chiếu
              </Text>
              <Text>
                Mật khẩu phải có độ dài ít nhất 6 kí tự, Bao gồm ít nhất:
              </Text>
              <View style={styles.note}>
                <Text>1 kí tự hoa</Text>
                <Text>1 kí tự số</Text>
              </View>
            </View>
            <View style={styles.actiton}>
              <BouncyCheckbox
                size={25}
                fillColor="red"
                unfillColor="#FFFFFF"
                text="Tôi đã đọc"
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ fontFamily: "JosefinSans-Regular" }}
                onPress={(_isChecked: boolean) => {}}
              />
              <Text style={styles.textAction}>Điều khoản sử dụng</Text>
            </View>
          </View>
          <View style={styles.buttonAction}>
            <View style={styles.btnDangNhap}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text>Đăng nhập</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnDangKy}>
              <TouchableOpacity>
                <Text>Đăng ký</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Resgiter;

const styles = StyleSheet.create({
  title: {
    color: "#1da1f2",
    textAlign: "center",
    fontSize: 50,
    fontStyle: "normal",
    fontWeight: "500",
  },

  layout: {
    marginLeft: 20,
  },

  inputName: {
    width: 350,
    flexShrink: 0,
    marginTop: 20,
  },
  textName: {
    color: "#757575",
    fontSize: 15,
    fontWeight: "600",
  },
  phoneInput: {
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    fontSize: 16,
    fontStyle: "italic",
  },
  warring: {
    marginTop: 30,
  },
  note: {
    marginLeft: 20,
  },
  actiton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  textAction: {
    marginLeft: 100,
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
  },
  button: {
    color: "black",
    fontSize: 17,
  },

  scrollView: {
    marginHorizontal: 5,
  },
});
