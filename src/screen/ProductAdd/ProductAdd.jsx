import React, { useState ,useContext} from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./ProductAdd.style";
import PrimaryButton from "./../../components/PrimaryButton/PrimaryButton ";
import { useNavigation } from '@react-navigation/native';
import { AppContext } from './../../AppContext';


export default function ProductAdd () {
  const {list,setList} = useContext(AppContext)
  // điều hướng
  const navigation = useNavigation();

  const [textProductName, setTextProductName] = useState("");
  const [textProductPrice, setTextProductPrice] = useState("");
  const [textProductImage, setTextProductImage] = useState("");

  const handleChangeProductName = (input) => {
    setTextProductName(input);
  };

  const handleChangeProductPrice = (input) => {
    setTextProductPrice(input);
  };

  const handleChangeProductImage = (input) => {
    setTextProductImage(input);
  };



  const handleAddProduct = () => {
    // tạo một object để chứa đối tượng mới tạo
    const addedProduct = {
      id:list.length + 1,
      name: textProductName,
      price: textProductPrice,
      image: textProductImage,
    };
    console.log('ee')
    // gọi hàm addnewProducttoCopyData bên cha bằng callback để gửi  sản phẩm mới lên  để bên cha đính thêm id  tạo mới vào và luu vô mảng copyData-> dùng kỹ thuật nâng state bên cha
    // addNewProduct(addedProduct);
    // chuyển các input lại thành rỗng
 setList([...list,addedProduct]);
    // điều hướng sang home
    // setModalState(!modalState);
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Thêm sản phẩm </Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên sản phẩm ở đây"
        value={textProductName}
        onChangeText={handleChangeProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập giá sản phẩm ở đây"
        keyboardType="numeric"
        value={textProductPrice}
        onChangeText={(e) => handleChangeProductPrice(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập ảnh sản phẩm ở đây"
        value={textProductImage}
        onChangeText={(e) => handleChangeProductImage(e)}
      />
      <PrimaryButton style={styles.button} onPress={handleAddProduct}>
        Lưu
      </PrimaryButton>
    </View>
  );
}
