import React, { useState,useContext } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./EmployeeAdd.style";
import PrimaryButton from "./../../components/PrimaryButton/PrimaryButton ";
import Input from '../../components/Input/Input';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from './../../AppContext';

export default function EmployeeAdd() {
// điều hướng
  const navigation = useNavigation();

// dung context
  const {list,setList} = useContext(AppContext)

// cac state
  const [textEmployeeName, setTextEmployeeName] = useState("");
  const [textEmployeePosition, setTextEmployeePosition] = useState("");
  const [textEmployeeAvatarUri, setTextEmployeeAvatarUri] = useState("");
// cac ham tuong tac khi input thay doi
  const handleChangeEmployeeName = (input) => {
    setTextEmployeeName(input);
  };

  const handleChangeEmployeePosition = (input) => {
    setTextEmployeePosition(input);
  };

  const handleChangeEmployeeAvatarUri = (input) => {
    setTextEmployeeAvatarUri(input);
  };

  const handleAddEmployee = () => {
  // tạo một object để chứa đối tượng mới tạo -> nho de key khop voi mang goc state
    const addedEmployee = {
      id:list.length + 1,
      name: textEmployeeName,
      role: textEmployeePosition,
      avatarUri: textEmployeeAvatarUri 
    };
  // thêm nhân viên mới vào mảng -> nhớ trong react luôn phải tạo mảng sao chép trước khi thêm nhân viên mới vào -> ở phần tham chiếu buổi ngày 16/12/2024
    setList([...list,addedEmployee]);
 // điều hướng tro lại EmployeeList
    navigation.goBack()

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Thêm nhân viên </Text>
      <Input
        style={styles.inputContainer}
        placeholder="Họ và tên"
        value={textEmployeeName}
        onChangeText={(e) => handleChangeEmployeeName(e)}
      />
      <Input
        style={styles.inputContainer}
        placeholder="Chức vụ"
        value={textEmployeePosition}
        onChangeText={(e) => setTextEmployeePosition(e)}
      />
           <Input
        style={styles.inputContainer}
        placeholder="Ảnh avatar"
        value={textEmployeeAvatarUri}
        onChangeText={(e) => handleChangeEmployeeAvatarUri(e)}
      />
     <View style={styles.buttonPosition}>
     <PrimaryButton  onPress={handleAddEmployee}  >
        Lưu
      </PrimaryButton>
     </View>
     
    </View>
  );
}
