# Image Search Application

Welcome to the Image Search application—a user-friendly mobile application built using React Native, designed to search for images with the added benefit of automatic word correction suggestions.

## Table of Contents

- [Features](#features)
- [Logic and Asssumption](#logic-and-assumptions)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)

## Features

1. **Search Bar**  
   Allows users to search for images. As users type, word predictions appear, assisting in the correction of possible typos or misspellings.
2. **Image Grid Display**  
   Displays search results in a neat grid format. Users can click on any image to view it in detail.
3. **Image Preview Modal**  
   Provides a more detailed view of selected images in a modal format.
4. **Animated Transitions**  
   Smooth animations for UI transitions, like the logo fade and search bar movement, enhance user experience.

## Logic and Assumptions

> The implementation is designed to suggest words that could potentially match a given "mistyped" word. Initially, any non-alphabetical characters are removed from the word to yield a cleaned-up version. This word is then examined to determine its length and whether it starts with a consonant or vowel. Based on its length, the code looks up potential matching words from the wordsDictionary, which are structured with word lengths as keys and further organised by the first letter of words. If the input word starts with a consonant, only words from the dictionary starting with the same consonant are considered. However, if the word starts with a vowel, the function fetches words that start with any vowel. To match the mistyped word with potential suggestions, the module then replaces all vowels in the word with an caret (\^). Words that undergo the same transformation and match the modified mistyped word are deemed as potential matches. When serving the final list of matches, if the cleaned-up input word is part of the potential matches, it is presented first, followed by up to three more suggestions. Otherwise, only the top four matches are returned. This helps users identify words they might have intended to type when they made an error.

## Setup and Installation

1. **Prerequisites**:

   - Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
   - Install React Native CLI globally:
     ```bash
     npm install -g react-native-cli
     ```

2. **Install Project Dependencies**:

   - Navigate to your project directory and run:
     ```bash
     npm install
     ```

3. **Setting up the Development Environment**:

   - If you haven't already, set up the development environment for [iOS](https://reactnative.dev/docs/environment-setup) and/or [Android](https://reactnative.dev/docs/environment-setup).

4. **Start the Metro Server**:

- To start Metro, run the following command from the _root_ of your React Native project:

  ```bash
  # using npm
  npm start

  # OR using Yarn
  yarn start
  ```

5. **Start your Application**:

- Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

  ### For Android

  ```bash
  # using npm
  npm run android

  # OR using Yarn
  yarn android
  ```

  ### For iOS

  ```bash
  # using npm
  npm run ios

  # OR using Yarn
  yarn ios
  ```

  If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

  This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Usage

1. Launch the app and you'll be greeted with a prominent logo.
2. Tap on the search bar to start your image search. As you type, word suggestions will appear below.
3. Select a word suggestion if your desired term appears or continue typing.
4. View the returned images in the grid display. For a closer look, tap on any image to open the preview modal.
5. Close the modal to return to your search results.
