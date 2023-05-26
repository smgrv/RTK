import React, {useState} from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useLoginUserMutation} from '../networking/login';
import {setemailAddress} from '../redux/emailSlice';
import {useAppDispatch} from '../redux/store';

function LoginScreen(): JSX.Element {
  const navigation = useNavigation();

  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');

  const [test] = useLoginUserMutation();

  const dispatch = useAppDispatch(); 

  return (
    <SafeAreaView style={{flex: 1, margin: 4}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text>Login Screen</Text>
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={(e: string) => setemail(e)}
          style={{padding: 7, margin: 10}}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="password"
          value={pass}
          onChangeText={(e: string) => setpass(e)}
          style={{padding: 7, margin: 10}}
        />
        <Pressable
          style={{
            backgroundColor: 'lightblue',
            padding: 5,
            margin: 5,
            alignSelf: 'center',
          }}
          onPress={async () => {
            dispatch(setemailAddress(email))
            let apiResponse = await test({username: email, password: pass});
            if (apiResponse) {
              // @ts-ignore
              navigation.navigate('HomeScreen');
            }
          }}>
          <Text>Clickkkkkkkkk</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
