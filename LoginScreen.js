import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import {
  ActionButton,
  FormCard,
  FormScreenShell,
  HeaderTitle,
  RoundedField,
  uiStyles,
} from '../components/UI';

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <FormScreenShell>
      <HeaderTitle title="Welcome Back" compact />
      <FormCard login>
        <RoundedField label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <RoundedField label="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <Pressable>
          <Text style={uiStyles.inlineLink}>Forgot Password ?</Text>
        </Pressable>
        <ActionButton label="Login" style={uiStyles.authButtonRight} />
      </FormCard>
    </FormScreenShell>
  );
}
