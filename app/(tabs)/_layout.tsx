import React from 'react'
import { View, Image, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants';

interface TabIconProps {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs `} 
      numberOfLines={1} style={{color: color, width: 50, textAlign: 'center'}}> 
      {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#18181A', // Couleur active : Noir
          tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.5)', // Couleur inactive : Noir à 50%
          tabBarStyle: {
            backgroundColor: '#FA8E61', // Fond orange
            borderTopWidth: 0, // Supprime la bordure
            height: 60, // Hauteur de la barre
            paddingBottom: 10,
            paddingTop: 10,
            justifyContent: 'center',
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="screenOne"
          options={{
            title: 'Cheval',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Cheval"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="screenTwo"
          options={{
            title: 'Map',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Map"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="screenThree"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout