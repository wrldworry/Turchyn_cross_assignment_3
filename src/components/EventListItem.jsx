import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, RADIUS, SPACING } from '../constants/theme';

export default function EventListItem({ title, city, imageUrl, onPress, compact = false }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, compact && styles.compactItem]}>
      <Image source={{ uri: imageUrl }} style={styles.thumb} />
      <View style={styles.textBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.city}>{city}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={COLORS.muted} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.bg, padding: SPACING.sm, borderRadius: RADIUS.md, gap: SPACING.md },
  compactItem: { width: 235 },
  thumb: { width: 46, height: 46, borderRadius: RADIUS.sm, backgroundColor: COLORS.primaryLight },
  textBox: { flex: 1 },
  title: { fontSize: 14, fontWeight: '700', color: COLORS.text },
  city: { fontSize: 12, color: COLORS.muted, marginTop: 2 },
});
