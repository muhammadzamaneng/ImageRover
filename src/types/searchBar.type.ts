export interface SearchBarProps {
  search: string;
  setSearch: (search: string) => void;
  onSubmit: () => void;
  onFocus: () => void;
}
