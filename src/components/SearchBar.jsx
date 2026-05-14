import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, RADIUS, SPACING } from '../constants/theme';

export default function SearchBar({ value, onChangeText, placeholder = 'Search' }) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={18} color={COLORS.muted} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.muted}
        style={styles.input}
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.input,
    borderRadius: RADIUS.md,
    minHeight: 42,
    paddingHorizontal: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  input: { flex: 1, color: COLORS.text, fontSize: 14 },
});
