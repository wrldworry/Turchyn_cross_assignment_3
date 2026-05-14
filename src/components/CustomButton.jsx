import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, RADIUS, SPACING } from '../constants/theme';

export default function CustomButton({ title, onPress, icon = 'cart-outline', variant = 'primary', fullWidth = false }) {
  const isPrimary = variant === 'primary';
  return (
    <TouchableOpacity
      activeOpacity={0.82}
      onPress={onPress}
      style={[styles.button, isPrimary ? styles.primary : styles.secondary, fullWidth && styles.fullWidth]}
    >
      {icon ? <Ionicons name={icon} size={16} color={isPrimary ? COLORS.bg : COLORS.primary} /> : null}
      <Text style={[styles.text, isPrimary ? styles.primaryText : styles.secondaryText]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: RADIUS.sm,
    paddingVertical: Platform.select({ ios: 11, android: 9, default: 10 }),
    paddingHorizontal: SPACING.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.sm,
  },
  primary: { backgroundColor: COLORS.primary },
  secondary: { backgroundColor: COLORS.bg, borderWidth: 1, borderColor: COLORS.primary },
  fullWidth: { width: '100%' },
  text: { fontSize: 13, fontWeight: '700' },
  primaryText: { color: COLORS.bg },
  secondaryText: { color: COLORS.primary },
});
