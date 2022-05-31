import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CardListController} from '@App/controllers';

import {NavigationRoute, RootStackParamList} from '@Types/navigation';

import {defaultScreenOptions} from '@Ui/Theme/theme';

function AppNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name={NavigationRoute.CardList}
        component={CardListController}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
