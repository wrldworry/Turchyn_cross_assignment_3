import React, { useMemo, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, ScrollView, StyleSheet, useWindowDimensions, Modal, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from './src/components/AppHeader';
import SearchBar from './src/components/SearchBar';
import CategoryPills from './src/components/CategoryPills';
import EventCard from './src/components/EventCard';
import EventListItem from './src/components/EventListItem';
import Avatar from './src/components/Avatar';
import SettingsRow from './src/components/SettingsRow';
import AuthInput from './src/components/AuthInput';
import CustomButton from './src/components/CustomButton';
import BottomTabBar from './src/components/BottomTabBar';
import { categories, events, settings } from './src/data/mockData';
import { COLORS, SPACING, RADIUS } from './src/constants/theme';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [category, setCategory] = useState(categories[0]);
  const [query, setQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const [logoutVisible, setLogoutVisible] = useState(false);
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const contentWidth = Math.min(width - SPACING.lg * 2, 430);
  const cardWidth = Math.min(contentWidth * 0.72, 270);

  const filteredEvents = useMemo(() => {
    return events.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  const openDetails = (event) => {
    setSelectedEvent(event);
    setScreen('details');
  };

  const renderScreen = () => {
    if (screen === 'details') return <DetailsScreen event={selectedEvent} onBack={() => setScreen('home')} />;
    if (screen === 'settings') return <SettingsScreen onLogout={() => setLogoutVisible(true)} />;
    if (screen === 'login') return <LoginScreen onRegister={() => setScreen('signup')} />;
    if (screen === 'signup') return <SignupScreen onContinue={() => setScreen('code')} />;
    if (screen === 'code') return <CodeScreen onContinue={() => setScreen('home')} />;

    return (
      <>
        <AppHeader onMenuPress={() => setScreen('settings')} />
        <SearchBar value={query} onChangeText={setQuery} placeholder="Search events" />
        <CategoryPills items={categories} active={category} onSelect={setCategory} />
        <SectionHeader title="Near you" />
        <FlatList
          data={filteredEvents}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalCards}
          renderItem={({ item }) => <EventCard {...item} cardWidth={cardWidth} onPress={() => openDetails(item)} />}
          keyExtractor={(item) => item.id}
        />
        <SectionHeader title="Your events" />
        <FlatList
          data={events.slice(1)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          renderItem={({ item }) => <EventListItem {...item} compact onPress={() => openDetails(item)} />}
          keyExtractor={(item) => item.id}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.page} keyboardShouldPersistTaps="handled">
        <View style={[styles.phoneScreen, { width: contentWidth, minHeight: isLandscape ? height - 70 : undefined }]}>
          {renderScreen()}
          <BottomTabBar active={screen === 'settings' ? 'settings' : 'home'} onSelect={(tab) => tab === 'settings' ? setScreen('settings') : setScreen('home')} />
        </View>
      </ScrollView>
      <Modal visible={logoutVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Log out</Text>
            <Text style={styles.modalText}>Are you sure you want to log out?</Text>
            <View style={styles.modalButtons}>
              <CustomButton title="Cancel" icon={null} variant="secondary" onPress={() => setLogoutVisible(false)} />
              <CustomButton title="Log out" icon={null} onPress={() => { setLogoutVisible(false); setScreen('login'); }} />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

function DetailsScreen({ event, onBack }) {
  return (
    <>
      <TouchableOpacity style={styles.backButton} onPress={onBack}><Ionicons name="chevron-back" size={20} color={COLORS.text} /><Text>Back</Text></TouchableOpacity>
      <Image source={{ uri: event.imageUrl }} style={styles.detailsImage} />
      <Text style={styles.detailsTitle}>{event.title}</Text>
      <Text style={styles.detailsPrice}>{event.price}</Text>
      <Text style={styles.detailsDescription}>A clean details screen based on the Figma layout. It uses Image, Text, View and TouchableOpacity components.</Text>
      <CustomButton title="Add to bag" icon="add" fullWidth />
    </>
  );
}

function SettingsScreen({ onLogout }) {
  return (
    <>
      <Text style={styles.centerTitle}>Settings</Text>
      <View style={styles.profileBox}>
        <Avatar size={72} />
        <Text style={styles.profileName}>Lucas Scott</Text>
        <Text style={styles.profileNick}>@lucasscott</Text>
      </View>
      {settings.map(item => <SettingsRow key={item} label={item} onPress={item === 'Storage' ? onLogout : undefined} />)}
    </>
  );
}

function LoginScreen({ onRegister }) {
  return (
    <>
      <View style={styles.heroImage} />
      <Text style={styles.welcome}>Welcome!</Text>
      <AuthInput placeholder="Email Address" />
      <AuthInput placeholder="Password" secureTextEntry />
      <CustomButton title="Login" icon="log-in-outline" fullWidth />
      <TouchableOpacity onPress={onRegister}><Text style={styles.helper}>Not a member? Register now</Text></TouchableOpacity>
    </>
  );
}

function SignupScreen({ onContinue }) {
  return (
    <>
      <Text style={styles.centerTitle}>Sign up</Text>
      <AuthInput placeholder="Name" />
      <AuthInput placeholder="Email Address" />
      <AuthInput placeholder="Password" secureTextEntry />
      <AuthInput placeholder="Confirm password" secureTextEntry />
      <CustomButton title="Continue" icon="arrow-forward-outline" fullWidth onPress={onContinue} />
    </>
  );
}

function CodeScreen({ onContinue }) {
  return (
    <View style={styles.codeBox}>
      <Text style={styles.centerTitle}>Enter confirmation code</Text>
      <Text style={styles.profileNick}>A 4 digit code was sent to your email.</Text>
      <View style={styles.codeRow}>{[1,2,3,4].map(i => <View key={i} style={styles.codeCell}><Text>{i === 2 ? '5' : ''}</Text></View>)}</View>
      <CustomButton title="Continue" icon={null} fullWidth onPress={onContinue} />
    </View>
  );
}

function SectionHeader({ title }) {
  return <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>{title}</Text><Text style={styles.seeMore}>See more</Text></View>;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.screen },
  page: { padding: SPACING.lg, alignItems: 'center' },
  phoneScreen: { backgroundColor: COLORS.bg, borderRadius: 22, padding: SPACING.lg, gap: SPACING.md, overflow: 'hidden' },
  horizontalCards: { gap: SPACING.md, paddingRight: SPACING.lg },
  horizontalList: { gap: SPACING.md, paddingRight: SPACING.lg, paddingBottom: SPACING.sm },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: SPACING.sm },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: COLORS.text },
  seeMore: { fontSize: 14, fontWeight: '700', color: COLORS.primary },
  centerTitle: { textAlign: 'center', fontWeight: '800', color: COLORS.text, fontSize: 22 },
  profileBox: { alignItems: 'center', gap: SPACING.xs, paddingVertical: SPACING.md },
  profileName: { fontWeight: '800', color: COLORS.text, fontSize: 18 },
  profileNick: { color: COLORS.muted, fontSize: 14, textAlign: 'center' },
  heroImage: { height: 240, backgroundColor: COLORS.primaryLight, marginHorizontal: -SPACING.lg, marginTop: -SPACING.lg },
  welcome: { textAlign: 'center', fontSize: 26, fontWeight: '900', color: COLORS.text, marginTop: SPACING.md },
  helper: { color: COLORS.primary, fontSize: 16, textAlign: 'center', fontWeight: '700' },
  backButton: { flexDirection: 'row', alignItems: 'center', gap: SPACING.xs },
  detailsImage: { height: 260, borderRadius: RADIUS.md, backgroundColor: COLORS.primaryLight },
  detailsTitle: { fontSize: 24, fontWeight: '900', color: COLORS.text },
  detailsPrice: { fontSize: 16, fontWeight: '700', color: COLORS.muted },
  detailsDescription: { color: COLORS.muted, lineHeight: 22 },
  codeBox: { gap: SPACING.lg, alignItems: 'center', paddingVertical: SPACING.xl },
  codeRow: { flexDirection: 'row', gap: SPACING.sm },
  codeCell: { width: 44, height: 44, borderRadius: RADIUS.sm, borderWidth: 1, borderColor: COLORS.border, alignItems: 'center', justifyContent: 'center' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.55)', alignItems: 'center', justifyContent: 'center', padding: SPACING.lg },
  modalCard: { width: '100%', maxWidth: 320, backgroundColor: COLORS.bg, borderRadius: RADIUS.md, padding: SPACING.lg, gap: SPACING.md },
  modalTitle: { textAlign: 'center', fontWeight: '800', fontSize: 18, color: COLORS.text },
  modalText: { textAlign: 'center', color: COLORS.muted },
  modalButtons: { flexDirection: 'row', justifyContent: 'center', gap: SPACING.sm },
});
