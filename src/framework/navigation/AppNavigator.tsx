import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeController} from '@App/controllers';

import {NavigationRoute, RootStackParamList} from '@Types/navigation';

import {defaultScreenOptions} from '@Ui/Theme/theme';

function AppNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={NavigationRoute.Home} component={HomeController} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
