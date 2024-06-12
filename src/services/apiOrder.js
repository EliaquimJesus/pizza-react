const API_URL = "https://react-fast-pizza-api.onrender.com/api";

async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export default getOrder;
