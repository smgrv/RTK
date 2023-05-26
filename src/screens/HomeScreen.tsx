import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import type {RootState} from '../redux/store';
import {useWalletDataQuery} from '../networking/home';
import LocalStorage from '../helpers/LocalStorage';
import {useNavigation} from '@react-navigation/native';

function HomeScreen(): JSX.Element {
  const {data, isLoading, isSuccess} = useWalletDataQuery();

  const name = useSelector((store: RootState) => store.name.name);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          title="goback"
          onPress={async () => {
            await LocalStorage.clear();
            navigation.goBack();
          }}
        />
        <Text>{`isSuccess:${isSuccess}`}</Text>
        <Text>{`email:${name}`}</Text>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
