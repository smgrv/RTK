import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

function HomeScreen(): JSX.Element {
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
