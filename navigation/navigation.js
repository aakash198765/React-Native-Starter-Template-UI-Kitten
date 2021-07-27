import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home';
import { DetailsScreen } from '../screens/detail.component';
import { BottomNavigation, BottomNavigationTab, Layout, Text, Drawer, DrawerItem, IndexPath, Icon , DrawerGroup } from '@ui-kitten/components';
import { createDrawerNavigator } from '@react-navigation/drawer';

const MenuIcon = (props) => (
  <Icon name='menu-2' {...props} />
); 
const DetailIcon = (props) => (
  <Icon name='book-open' {...props} />
);

const Stack = createStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator(); 
const Drawerr = createDrawerNavigator(); 

// Home Navigator - stack screens 
const HomeNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Home' component={HomeScreen}/>
    <Stack.Screen name='Details' component={DetailsScreen}/>
  </Stack.Navigator>
);

// tab Screen components for the bottom-tabs
const Tab1 = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>TAB 1</Text>
  </Layout>
);

const Tab2 = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>TAB2</Text>
  </Layout>
);
const Tab3 = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Tab3</Text>
  </Layout>
);
const Tab4 = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Tab4</Text>
  </Layout>
);


// BottomTabBar configuration
const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='TAB 1'/>
    <BottomNavigationTab title='TAB 2'/>
    <BottomNavigationTab title='TAB 3'/>
    <BottomNavigationTab title='TAB 4'/>
  </BottomNavigation>
);
// TabNavigator Configuration -- TabNavigator Screen --**
const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Tab1' component={HomeNavigator}/>
    <Screen name='Tab2' component={Tab2}/>
    <Screen name='Tab3' component={Tab3}/>
    <Screen name='Tab4' component={Tab4}/>
  </Navigator>
);



//DrawerNaviagtor Configuration 
const DrawerContent = ({ navigation, state }) => (
  <Drawer
    selectedIndex={new IndexPath(state.index)}
    onSelect={index => navigation.navigate(state.routeNames[index.row])}>
    <DrawerItem title='Dashboard' accessoryLeft={MenuIcon} /> 
    <DrawerItem title='Detail' accessoryLeft={DetailIcon} />
  </Drawer> 
);
// DrawerNavigation Configuration -- Drawers Screen --** 
const DrawerNavigator = () => (
  <Drawerr.Navigator drawerContent={props => <DrawerContent {...props}/>}>
    <Drawerr.Screen name='Dashboard' component={TabNavigator}/>
    <Drawerr.Screen name='Detail' component={DetailsScreen}/>
  </Drawerr.Navigator> 
);



export const AppNavigator = () => (
  <NavigationContainer>
    <DrawerNavigator/>
  </NavigationContainer>
);