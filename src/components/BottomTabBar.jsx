import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING } from '../constants/theme';

const tabs = [
  { key: 'home', label: 'Home', icon: 'home-outline' },
  { key: 'friends', label: 'Friends', icon: 'people-outline' },
  { key: 'settings', label: 'Settings', icon: 'settings-outline' },
];

export default function BottomTabBar({ active = 'home', onSelect }) {
  return <View style={styles.bar}>{tabs.map(tab => {
    const selected = tab.key === active;
    return <TouchableOpacity key={tab.key} onPress={() => onSelect?.(tab.key)} style={styles.tab}>
      <Ionicons name={tab.icon} size={20} color={selected ? COLORS.primary : COLORS.muted} />
      <Text style={[styles.label, selected && styles.active]}>{tab.label}</Text>
    </TouchableOpacity>;
  })}</View>;
}

const styles = StyleSheet.create({
  bar: { flexDirection: 'row', justifyContent: 'space-around', paddingTop: SPACING.sm, paddingBottom: SPACING.md, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.bg },
  tab: { alignItems: 'center', gap: 2, minWidth: 70 },
  label: { fontSize: 10, color: COLORS.muted },
  active: { color: COLORS.primary, fontWeight: '700' },
});
