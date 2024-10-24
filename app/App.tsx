import React from 'react';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomePage" 
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ProfilePage" 
          component={ProfilePage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}