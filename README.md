# Turchyn_cross_assignment_3
https://github.com/wrldworry/Turchyn_cross_assignment_3

React Native/Expo project for homework 3. The project recreates the main repeated UI elements from the Figma design `Turchyn_cross_assignment_3`: search bar, category list, event cards, event list rows, avatar, settings rows, auth inputs, app header, bottom navigation and buttons.

## Implemented components

1. `CustomButton.jsx` — reusable button with icon, primary/secondary variants and props: `title`, `icon`, `variant`, `fullWidth`, `onPress`.
2. `SearchBar.jsx` — input field with search icon and props: `value`, `onChangeText`, `placeholder`.
3. `CategoryPills.jsx` — horizontal scrollable category list with active state.
4. `EventCard.jsx` — event/product card with image, title, city, rating and buy button.
5. `EventListItem.jsx` — compact list row with image, text and chevron.
6. `AppHeader.jsx` — header with icon, title and avatar.
7. `Avatar.jsx` — reusable profile image component with dynamic `size` and `imageUrl`.
8. `SettingsRow.jsx` — settings list item.
9. `AuthInput.jsx` — email/password input with show/hide password action.
10. `BottomTabBar.jsx` — bottom navigation component.

## React Native requirements checklist

- Basic components used: `View`, `Text`, `Image`, `ScrollView`, `FlatList`, `TouchableOpacity`, `TextInput`, `SafeAreaView`.
- Styling is made with `StyleSheet.create()`.
- Flexbox is used for rows, cards, navigation, settings rows and responsive screen layout.
- `Platform.select()` is used in `theme.js` and `CustomButton.jsx` for iOS/Android shadow and button spacing.
- `useWindowDimensions()` is used in `App.js` and `EventCard.jsx` to adapt card width and layout in portrait/landscape.
- Components are modular and stored in separate files inside `src/components`.
- Dynamic data is passed through props.
- Colors, spacing, radii and shadows are stored as constants in `src/constants/theme.js` to avoid magic numbers.

## How to create and run the project step by step

### 1. Install Node.js

Install the LTS version of Node.js. After installation, check it in the terminal:

```bash
node -v
npm -v
```

### 2. Install dependencies

Open the project folder in the terminal and run:

```bash
npm install
```

### 3. Start Expo

```bash
npm start
```

### 4. Check on a phone

Install **Expo Go** on your phone. Scan the QR code from the terminal or browser window. The app should open and show the recreated screens: Home, Event Details, Settings, Login, Sign up, Confirmation Code and Logout modal.

### 5. Check on Android emulator

```bash
npm run android
```

### 6. Check on iOS simulator

```bash
npm run ios
```

# Turchyn_cross_assignment_3
