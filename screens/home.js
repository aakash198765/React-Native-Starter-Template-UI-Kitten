import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Icon, TopNavigationAction } from '@ui-kitten/components';

// Menu Icon
const MenuIcon = (props) => (
  <Icon  {...props} name='menu-2' /> 
);

export const HomeScreen = ({ navigation }) => {

  // navigation from Home to Detail Screen
  const navigateDetails = () => {
    navigation.navigate('Details');
  }; 

  // Menu Navigation Path/Action
  const MenuActionNavigation = () => {
    navigation.toggleDrawer();
  };
  // Custom Menu - Top Navigation Action
  const MenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={MenuActionNavigation} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Dashboard' alignment='center' accessoryLeft={MenuAction}  />
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  );
};