import React, { useState ,useContext} from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./ProductUpdate.style";
import PrimaryButton from "./../../components/PrimaryButton/PrimaryButton ";
import { useNavigation } from '@react-navigation/native';
import { AppContext } from './../../AppContext';
export default function ProductUpdate({route}) {
  
  
  const {list} = useContext(AppContext)
  const {dataItem}= route.params;
  // console.log(dataItem)
  const navigation = useNavigation();

  const [textProductName, setTextProductName] = useState(dataItem.name);
  const [textProductPrice, setTextProductPrice] = useState(dataItem.price);
  const [textProductImage, setTextProductImage] = useState(dataItem.image);

  const handleChangeProductName = (input) => {
    setTextProductName(input);
  };

  const handleChangeProductPrice = (input) => {
    setTextProductPrice(input);
  };

  const handleChangeProductImage = (input) => {
    setTextProductImage(input);
  };
  const handleUpdateProduct = () => {
    // tạo một object để chứa đối tượng mới tạo => nhớ lấy key giống mảng copyData thì thì mới map key vào bên ProductList ở hàm updateProducttoCopyData được
    const updatedProduct = {
        id: dataItem.id,
        name: textProductName,
        price: textProductPrice,
        image: textProductImage,
    };
   // tao tham chieu trong react  khac trong javascript thuan
const indexOfProductIdNeedUpdate = list.findIndex((item)=> item.id === updatedProduct.id)
    
if (indexOfProductIdNeedUpdate !== -1) {
  list [indexOfProductIdNeedUpdate]
  // lệnh vầy dư thùa
  // cap nhat tung thuoc tinh react khac js khoang 2:11 -> xem lai

  // list.splice(indexOfProductIdNeedUpdate, 1, updatedProduct);
}



// chuyển các input lại thành rỗng -> không cần do khi thay đổi màn hình mặc định sẽ set lại rỗng
    // setTextProductImage("");
    // setTextProductPrice("");
    // setTextProductName("");
    // dùng useNavigation để trở lại
    
    navigation.navigate("ProductList",{updatedProduct})

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Update sản phẩm </Text>
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
      <PrimaryButton style={styles.button} onPress={handleUpdateProduct}>
        Lưu
      </PrimaryButton>
    </View>
  );
}
