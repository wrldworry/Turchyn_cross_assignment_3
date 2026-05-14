import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, RADIUS, SPACING } from '../constants/theme';

export default function AuthInput({ placeholder, secureTextEntry, value, onChangeText }) {
  const [hidden, setHidden] = useState(Boolean(secureTextEntry));
  return (
    <View style={styles.wrapper}>
      <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor={COLORS.muted} secureTextEntry={hidden} style={styles.input} />
      {secureTextEntry ? <TouchableOpacity onPress={() => setHidden(!hidden)}><Ionicons name={hidden ? 'eye-outline' : 'eye-off-outline'} size={18} color={COLORS.muted} /></TouchableOpacity> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { minHeight: 46, borderWidth: 1, borderColor: COLORS.border, borderRadius: RADIUS.sm, paddingHorizontal: SPACING.md, flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.bg },
  input: { flex: 1, color: COLORS.text },
});
