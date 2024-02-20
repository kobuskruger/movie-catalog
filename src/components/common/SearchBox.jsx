function SearchBox({ search, setSearch, placeholder }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      value={search || ""}
      className="focus:ring-primary-500 w-full rounded-lg bg-white bg-opacity-95 p-4 text-lg font-semibold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50"
    />
  );
}

export default SearchBox;
