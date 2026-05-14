import { Platform } from 'react-native';

export const COLORS = {
  primary: '#087BFF',
  primaryLight: '#EAF3FF',
  bg: '#FFFFFF',
  screen: '#F7F9FC',
  text: '#111827',
  muted: '#6B7280',
  border: '#E5E7EB',
  input: '#F8FAFC',
  danger: '#EF4444',
};

export const SPACING = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24 };
export const RADIUS = { sm: 8, md: 12, lg: 18 };

export const SHADOW = Platform.select({
  ios: { shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 8, shadowOffset: { width: 0, height: 4 } },
  android: { elevation: 3 },
  default: {},
});
