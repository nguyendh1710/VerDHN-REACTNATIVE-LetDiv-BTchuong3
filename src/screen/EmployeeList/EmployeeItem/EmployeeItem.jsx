import React from 'react';
import { View,Image, Text } from 'react-native';
import {styles} from './EmployeeItem.style'
import { useNavigation } from '@react-navigation/native';


export default function EmployeeItem({dataItem}) {

  // dùng navigation
  const navigation = useNavigation();
  handleShowUpdate =()=>{
    

 // điều hướng tro lại EmployeeList

 navigation.navigate("EmployeeUpdate", { dataItem });

  }

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image
          style={styles.avatar}
          resizeMode="cover"
          source={{ uri: `${dataItem.avatarUri}`  }}
          accessibilityLabel="Avatar"
        />
        <View style={styles.info}>
          <Text style={styles.name} onPress={handleShowUpdate}>{dataItem.name}</Text>
          <Text style={styles.role}>{dataItem.role}</Text>
        </View>
      </View>
      <Image
        style={styles.inboxIcon}
        resizeMode="cover"
        source={{ uri: 'https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/inbox.png?raw=true'  }}
        accessibilityLabel="Inbox icon"
      />
    </View>
  );
}


