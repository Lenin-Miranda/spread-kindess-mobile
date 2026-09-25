# Spread Kindness Mobile

An Expo/React Native interface prototype for a community focused on everyday acts of kindness.

## Current features

- Login and registration screens in a React Navigation stack.
- A home screen with sample community highlights and a daily mission.
- Local tab selection for Home, Posts, Inbox and Settings.
- NativeWind styling and safe-area handling.

The displayed community statistics and stories are sample UI content. The repository does not contain a backend or a persistent authentication service.

## Local development

Requires Git, Node.js and npm. Use a Node release compatible with the dependencies in `package.json`.

```bash
git clone https://github.com/Lenin-Miranda/spread-kindess-mobile.git
cd spread-kindess-mobile
npm install
npm run start
```

Use a device or simulator compatible with the project's Expo SDK 54. For the iOS simulator, use macOS with Xcode; for Android, configure an emulator or a connected device.

## Commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the Expo development server |
| `npm run android` | Start Expo for Android |
| `npm run ios` | Start Expo for iOS |
| `npm run web` | Request Expo's web target |

The manifest does not currently list `react-dom` or `react-native-web`; the web target may require additional setup. The native targets are the focus of this scaffold.

## Code map

- [App.tsx](App.tsx): navigation and safe-area providers.
- [src/navigation/AuthStack.tsx](src/navigation/AuthStack.tsx): screen routing.
- [src/pages/auth/](src/pages/auth/): authentication UI.
- [src/pages/home/HomePage.tsx](src/pages/home/HomePage.tsx): sample community dashboard.
- [app.json](app.json): Expo application configuration.

No application-specific environment variables or automated test/lint scripts are configured. Review screen transitions, keyboard behavior and safe areas on a device before shipping changes.
