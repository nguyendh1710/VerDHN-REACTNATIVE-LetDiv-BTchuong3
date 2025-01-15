import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { styles } from "./EmployeeUpdate.style";
import PrimaryButton from "./../../components/PrimaryButton/PrimaryButton ";
import Input from "../../components/Input/Input";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "./../../AppContext";

export default function EmployeeUpdate({ route }) {
  // dùng navigation
  const navigation = useNavigation();
  // dùng context
  const { list, setList } = useContext(AppContext);
  // nhận dữ kiệu từ route params
  const { dataItem } = route.params;

  // gọi state để quản lý thay đổi của input và gắn giá trị mặ định cho state là lấy vè từ context
  const [textEmployeeName, setTextEmployeeName] = useState(dataItem.name);
  const [textEmployeePosition, setTextEmployeePosition] = useState(
    dataItem.role
  );
  const [textEmployeeAvatarUri, setTextEmployeeAvatarUri] = useState(
    dataItem.avatarUri
  );

  const handleSaveUpdate = () => {
    // tạo một object để chứa đối tượng mới tạo
    const updatedEmployee = {
      id: dataItem.id,
      name: textEmployeeName,
      role: textEmployeePosition,
      avatarUri: textEmployeeAvatarUri,
    };
    // thay thế nhân viên đã có trong mảng  bằng updatedEmployee tạo một bản copy của list để cập nhật vào -> ở phần tham chiếu buổi ngày 16/12/2024
    setList((list) =>
      list.map((employee) =>
        employee.id === dataItem.id
          ? { ...employee, ...updatedEmployee }
          : employee
      )
    );
    // trở lại EmployeeList
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sửa nhân viên </Text>
      <Input
        style={styles.inputContainer}
        placeholder="Họ và tên"
        value={textEmployeeName}
        onChangeText={(e) => setTextEmployeeName(e)}
      />
      <Input
        style={styles.inputContainer}
        placeholder="Chức vị"
        value={textEmployeePosition}
        onChangeText={(e) => setTextEmployeePosition(e)}
      />
      <Input
        style={styles.inputContainer}
        placeholder="Avatar"
        value={textEmployeeAvatarUri}
        onChangeText={(e) => setTextEmployeeAvatar(e)}
      />
      <View style={styles.buttonPosition}>
        <PrimaryButton onPress={handleSaveUpdate}>Lưu</PrimaryButton>
      </View>
    </View>
  );
}
