import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from './CustomButton';
import { COLORS, RADIUS, SPACING, SHADOW } from '../constants/theme';

export default function EventCard({ title, city, price, rating, imageUrl, cardWidth, onPress }) {
  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <View style={styles.rating}><Ionicons name="star" size={11} color={COLORS.primary} /><Text style={styles.ratingText}>{rating}</Text></View>
        </View>
        <Text style={styles.city}>{city}</Text>
        <CustomButton title="Buy tickets" icon="cart-outline" variant="secondary" fullWidth onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: COLORS.bg, borderRadius: RADIUS.md, overflow: 'hidden', ...SHADOW },
  image: { width: '100%', height: 112, backgroundColor: COLORS.primaryLight },
  content: { padding: SPACING.md, gap: SPACING.sm },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: SPACING.sm },
  title: { flex: 1, fontSize: 14, fontWeight: '800', color: COLORS.text },
  city: { fontSize: 12, color: COLORS.muted },
  rating: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  ratingText: { fontSize: 11, color: COLORS.muted },
});
