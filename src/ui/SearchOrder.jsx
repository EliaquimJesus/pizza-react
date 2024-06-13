import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleQuery(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);

    setQuery("");
  }

  return (
    <form onSubmit={handleQuery}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Order #"
      />
    </form>
  );
}

export default SearchOrder;
