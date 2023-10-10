import React from 'react';
import {TextInput, Button, StyleSheet} from 'react-native';
import {SearchBarProps} from '../types/searchBar.type';

const SearchBar = ({search, setSearch, onSubmit, onFocus}: SearchBarProps) => {
  return (
    <>
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={onSubmit}
        onFocus={onFocus}
        keyboardType="web-search"
      />
      <Button title="Search" onPress={onSubmit} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
  },
});

export default SearchBar;
