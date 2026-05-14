import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING } from '../constants/theme';

export default function SettingsRow({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Ionicons name="chevron-forward" size={16} color={COLORS.muted} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: { minHeight: 46, borderBottomWidth: 1, borderBottomColor: COLORS.border, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: SPACING.md },
  label: { color: COLORS.text, fontSize: 14 },
});
