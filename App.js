import 'react-native-gesture-handler';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = ({navigation}) => {

useEffect(() => {
  return () => {
   console.log('chuẩn bị xóa home')
  };
}, [])


  return (
    <View>
      <Text>test</Text>
      <Button title='Notification' onPress={()=>{
        navigation.navigate('Notification')
     
      }}>  </Button>
     </View>
  );
}

const Notification = ({navigation}) => {
  useEffect(() => {
    return () => {
     console.log('chuẩn bị xóa Notification')
    };
  }, [])
  return (
    <View>
      <Text>Notification</Text>
      <Button title='Profile' onPress={()=>{
        navigation.navigate('Profile')
     
      }}>  </Button>
      {/* <Button title='trở lại home' onPress={()=>{
   
        navigation.goBack()
      }}>  </Button> */}
     </View>
  );
}
const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button title='Quay tro lai man hinh top' onPress={()=>{
        navigation.popToTop()
      }}>  </Button>
     </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
