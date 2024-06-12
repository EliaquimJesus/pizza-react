import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOrder } from "../services/apiRestaurant";

function SearchOrder() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleQuery(e) {
        e.preventDefault();
        if (!query) return;

        navigate(`/Order/${query}`);

        setQuery("");
    }

    return (
        <form onSubmit={handleQuery}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    );
}

export async function loader({ params }) {
    const order = getOrder(params.orderId);

    return order;
}

export default SearchOrder;
