# Rent To Own — A&H Holdings Mobile App


## Overview
React Native (Expo) app for the A&H Holdings Rent To Own platform. Three portals:
- **Buyer Portal** — 17 screens for homeowners tracking their journey
- **Bank Portal** — 17 screens for partner bank officers
- **Admin Portal** — 25 screens for A&H Holdings operations

## Prerequisites
- Node.js 18+
- Expo CLI: `npm install -g expo-cli`
- EAS CLI: `npm install -g eas-cli`
- For iOS: Xcode 15+, Apple Developer account
- For Android: Android Studio, Java 17

## Quick Start (Development)
```bash
cd rto-mobile
npm install
npx expo start
# Then press 'i' for iOS Simulator or 'a' for Android Emulator
# Or scan QR code with Expo Go app on your device
```

## Test Credentials
- **Buyer Portal**: priya@email.com / (any password) — Priya Jayawardena
- **Bank Portal**: ranjith@hdfc.lk / (any password) — Ranjith Mendis, HDFC
- **Admin Portal**: admin@andhholdings.lk / (any password) — Admin

## Build for Distribution

### Development Build (Internal Testing)
```bash
# iOS (requires Apple Developer account)
eas build --profile development --platform ios

# Android (APK for direct install)
eas build --profile preview --platform android
```

### Production Build
```bash
# Both platforms
eas build --profile production --platform all
```

### Submit to App Stores
```bash
# After production build completes:
eas submit --profile production --platform ios
eas submit --profile production --platform android
```

## Project Structure
```
src/
  context/AppContext.js       — Global state (portal, toast notifications)
  theme/index.js              — Colors, typography, shared styles
  data/mockData.js            — All platform data (replace with real API)
  components/index.js         — 25 reusable UI components
  navigation/
    RootNavigator.js          — Entry point navigation
    BuyerNavigator.js         — Buyer portal stack + bottom tabs
    BankNavigator.js          — Bank portal stack + bottom tabs
    AdminNavigator.js         — Admin portal stack + bottom tabs
  screens/
    auth/                     — PortalSelectScreen, LoginScreen
    buyer/                    — 17 buyer portal screens
    bank/                     — 17 bank portal screens
    admin/                    — 25 admin portal screens
```

## Production Checklist (Before Live Launch)
- [ ] Replace mockData.js with real API calls (Node.js/Django backend)
- [ ] Implement real JWT authentication
- [ ] Add CRIB API integration in Scoring
- [ ] Add bank payment webhook integration
- [ ] Enable real push notifications (Expo Notifications + backend)
- [ ] Enable real biometric authentication (expo-local-authentication)
- [ ] Replace placeholder assets with branded icons/splash
- [ ] Conduct penetration testing
- [ ] Add Sentry error monitoring
- [ ] Add Sinhala/Tamil language support (i18n)
- [ ] Submit for App Store / Play Store review

## App IDs
- iOS Bundle ID: `lk.andhholdings.renttoown`
- Android Package: `lk.andhholdings.renttoown`

## Dependencies
- Expo ~52 (SDK 52)
- React Navigation v6 (Stack + Bottom Tabs)
- AsyncStorage for local persistence
- expo-local-authentication (Face ID / Touch ID)
- expo-notifications (push notifications)
- expo-document-picker / expo-image-picker (file uploads)
- expo-haptics (tactile feedback)
- victory-native (charts)
