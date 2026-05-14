import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { COLORS } from '../constants/theme';

export default function Avatar({ imageUrl, size = 48 }) {
  return (
    <View style={[styles.wrapper, { width: size, height: size, borderRadius: size / 2 }]}> 
      <Image source={{ uri: imageUrl || 'https://i.pravatar.cc/160?img=12' }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { backgroundColor: COLORS.primaryLight, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
  image: { width: '100%', height: '100%' },
});
