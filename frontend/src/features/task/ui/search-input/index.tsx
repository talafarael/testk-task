import { useSearchParams } from "react-router-dom";

export const SearchInput = ({ }) => {
  const [_, setSearchParams] = useSearchParams();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ search: e.target.value });
  };

  return (
    <input onChange={handleSearch} className="input" placeholder="search" />
  );
};
