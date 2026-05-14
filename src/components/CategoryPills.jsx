import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, RADIUS, SPACING } from '../constants/theme';

export default function CategoryPills({ items, active, onSelect }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.list}>
      {items.map((item) => {
        const selected = item === active;
        return (
          <TouchableOpacity key={item} onPress={() => onSelect(item)} style={[styles.pill, selected && styles.activePill]}>
            <Text style={[styles.text, selected && styles.activeText]}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: { gap: SPACING.sm, paddingVertical: SPACING.sm },
  pill: { paddingHorizontal: SPACING.md, paddingVertical: SPACING.sm, borderRadius: RADIUS.lg, backgroundColor: COLORS.bg, borderWidth: 1, borderColor: COLORS.border },
  activePill: { backgroundColor: COLORS.primary },
  text: { fontSize: 11, fontWeight: '700', color: COLORS.primary },
  activeText: { color: COLORS.bg },
});
