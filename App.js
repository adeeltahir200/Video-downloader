import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Firstscreen from './screens/Firstscreen';
import { Icon } from 'react-native-elements';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import Infoscreen from './screens/Infoscreen';
import Secondscreen from './screens/Secondscreen';
import Webscreen from './screens/Webscreen';
import Downloadingscreen from './screens/Downloadingscreen';
import Videoscreen from './screens/Videoscreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Menu = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Firstscreen}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#888888'
          },
          headerTintColor: 'white',
          headerLeft: () => <Icon type='material' name='list' color='white' size={40} style={{ marginLeft: 20 }} onPress={() => { navigation.toggleDrawer() }} />

        }}
      />
      <Stack.Screen
        name='video-downloading-screen'
        component={Secondscreen}
        options={({ navigation, route }) => ({
          title: 'Video Downloader',
          headerStyle: {
            backgroundColor: '#888888'
          },
          headerTintColor: 'white',
          headerRight: () => <TouchableOpacity
            onPress={() => { navigation.navigate('Home') }}
            style={{ marginRight: 30 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              Home
            </Text>
          </TouchableOpacity>,
          headerLeft: () => <Icon type='material' name='list' color='white' size={40} style={{ marginLeft: 20 }} onPress={() => { navigation.toggleDrawer(); }} />

        })}
      />
      <Stack.Screen
        name='web-screen'
        component={Webscreen}
        options={({ navigation, route }) => ({
          title: 'Web View',
          headerStyle: {
            backgroundColor: '#888888'
          },
          headerTintColor: 'white',
          headerRight: () => <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={{ marginRight: 30 }}><Text style={{ color: 'white', fontWeight: 'bold' }}>Home</Text></TouchableOpacity>,
          headerLeft: () => <Icon type='material' name='list' color='white' size={40} style={{ marginLeft: 20 }} onPress={() => { navigation.toggleDrawer(); }} />

        })}
      />
      <Stack.Screen
        name='Downloading-screen'
        component={Downloadingscreen}
        options={({navigation,route})=>({
          title:'Downloading Progress',
          headerStyle: {
            backgroundColor: '#888888'
          },
          headerTintColor: 'white',
          headerRight: () => <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={{ marginRight: 30 }}><Text style={{ color: 'white', fontWeight: 'bold' }}>Home</Text></TouchableOpacity>,
          headerLeft: () => <Icon type='material' name='list' color='white' size={40} style={{ marginLeft: 20 }} onPress={() => { navigation.toggleDrawer(); }} />
        })}
      />
      <Stack.Screen
        name='Video-screen'
        component={Videoscreen}
        options={({navigation,route})=>({
          title:'Video screen',
          headerStyle: {
            backgroundColor: '#888888'
          },
          headerTintColor: 'white',
          headerRight: () => <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={{ marginRight: 30 }}><Text style={{ color: 'white', fontWeight: 'bold' }}>Home</Text></TouchableOpacity>,
          headerLeft: () => <Icon type='material' name='list' color='white' size={40} style={{ marginLeft: 20 }} onPress={() => { navigation.toggleDrawer(); }} />
        })}
      />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' drawerType='front' drawerStyle={{ backgroundColor: 'black', borderRadius: 30, color: 'white', headerTintColor: 'white' }}>
        <Drawer.Screen
          name='Home'
          component={Menu}
          headerTintColor='white'
          color='white'
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ color }) => <Icon type='font-awesome' name='home' color='white' />,
            drawerStyle: { headerTintColor: 'white' }

          }}
        />
        <Drawer.Screen
          name='Info'
          component={Infoscreen}
          headerTintColor='white'
          options={{
            drawerLabel: 'Info',
            drawerIcon: ({ color }) => <Icon type='font-awesome' name='info-circle' color='white' />,
            headerTintColor: 'white'
          }}
        />

      </Drawer.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textstyle: {
    fontStyle: 'italic',
    color: 'white',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    letterSpacing: 3,
    marginTop: '5%'
  }
});
