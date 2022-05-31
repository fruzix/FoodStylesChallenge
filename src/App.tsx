import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ApolloProvider} from '@apollo/client';

import {store} from '@Framework/store';
import {client} from '@Framework/services/AppoloClient';

import AppNavigator from '@Framework/navigation/AppNavigator';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
