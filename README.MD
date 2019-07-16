# Overview

This is a basic trivia app made with the goal of having a bit more of portfolio + providing to a reviewer as an assessment.
Built on React Native v.0.60+ relying on as little native packages as possible to prevent bloating the APK file.

The data storage was built mainly using the Context API of React, no data persistence mechanism was implemented as to not install `async-storage` or any other persistence package. As a side note, this was not requested either.

The questions are loaded on demand from `https://opentdb.com`, decoded and displayed at the very moment the game is started. None of these questions are persisted.

Absolutely none of the questions or their answers used in this app are owned by me.

# Installation

```bash
# Using ssh
git clone git@github.com:Graren/trivia-assessment.git

# Or https
git clone https://github.com/Graren/trivia-assessment.git

cd trivia-assessment

# Preferred method of installation is yarn. See https://yarnpkg.com
yarn

# Or npm
npm install
```

That leaves the app in a completely usable state

# Running on device

### Debug build

Make sure that you have correctly setup your android environment, java, android virtual device, PATH and anything that is indicated by the react quickstart setup of android for your OS.

```
# Run at the root of the project
- react-native run-android
```

That will build and install the debug APK and packager for your device.

### Release build

Follow the guide [here](https://facebook.github.io/react-native/docs/signed-apk-android) to get your own keystore to sign the APK with.

```
cd android
gradlew assembleRelease
```

If you managed to build the apk or you got it from another source. Run the following command with a phone connected.

```
adb install <path-to-apk>.apk
```

If the app is directly sent to your phone or downloaded via Google drive or something. Tap the APK and allow it's installation

# Troubleshooting

- If RN the packager does not start

Open a different terminal and run

```
yarn start
```

Then on any terminal run

```
adb reverse tcp:8081 tcp:8081
```

Then reload the app.
