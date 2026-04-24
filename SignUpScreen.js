import React, { useState } from 'react';
import { ActionButton, FormCard, FormScreenShell, HeaderTitle, RoundedField, uiStyles } from '../components/UI';

export function SignUpScreen() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  return (
    <FormScreenShell>
      <HeaderTitle title="Create Your Account." compact />
      <FormCard>
        <RoundedField
          label="First Name"
          value={form.firstName}
          onChangeText={(firstName) => setForm((current) => ({ ...current, firstName }))}
        />
        <RoundedField
          label="Last Name"
          value={form.lastName}
          onChangeText={(lastName) => setForm((current) => ({ ...current, lastName }))}
        />
        <RoundedField
          label="Email"
          value={form.email}
          onChangeText={(email) => setForm((current) => ({ ...current, email }))}
          keyboardType="email-address"
        />
        <RoundedField
          label="Password"
          value={form.password}
          onChangeText={(password) => setForm((current) => ({ ...current, password }))}
          secureTextEntry
        />
        <ActionButton label="Sign up" style={uiStyles.authButtonRight} />
      </FormCard>
    </FormScreenShell>
  );
}
