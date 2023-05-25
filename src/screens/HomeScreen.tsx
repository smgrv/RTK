import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { useSelector } from 'react-redux';

import type { RootState } from '../redux/store';

function HomeScreen(): JSX.Element {

    const check  = useSelector((store:RootState)=>store.productsApi.mutations)

    console.log('check', check)

  return (
    <SafeAreaView style={{flex:1}} >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
