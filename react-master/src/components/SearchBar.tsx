
type SearchBarProps = {
  value: string;
  onChange: (next: string) => void;
};
function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    );
}
export default SearchBar;