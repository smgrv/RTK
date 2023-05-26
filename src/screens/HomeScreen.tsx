import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { useSelector } from 'react-redux';

import type { RootState } from '../redux/store';
import { useWalletDataQuery } from '../networking/home';

function HomeScreen(): JSX.Element {

    const {data, isLoading, isSuccess} = useWalletDataQuery()

    const email = useSelector((store:RootState)=>store.email.emailAddress)

    console.log('email',email)

  return (
    <SafeAreaView style={{flex:1}} >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{`isSuccess:${isSuccess}`}</Text>
        <Text>{`email:${email}`}</Text>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
