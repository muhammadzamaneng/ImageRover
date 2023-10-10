import React from 'react';
import {TextInput, Button, StyleSheet} from 'react-native';

type SearchBarProps = {
  search: string;
  setSearch: (search: string) => void;
  onSubmit: () => void;
  onFocus: () => void;
  style: any;
};

const SearchBar = ({
  search,
  setSearch,
  onSubmit,
  onFocus,
  style,
}: SearchBarProps) => {
  return (
    <>
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={onSubmit}
        onFocus={onFocus}
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
