import { useEffect, useState } from "react";

function App() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(10); // Number of cats to fetch

  useEffect(() => {
    const fetchCats = async () => {
      try {
        setLoading(true);
        setError(null);
        const url = `https://api.thecatapi.com/v1/images/search?limit=${count}`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        setCats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCats();
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cat Gallery</h1>
      <div style={{ marginBottom: "16px" }}>
        <label>
          Number of cats to show:
          <input
            type="number"
            min={1}
            max={50}
            value={count}
            onChange={e => setCount(Number(e.target.value))}
            style={{ marginLeft: 8, width: 60 }}
          />
        </label>
        <button onClick={() => setCount(count)} style={{ marginLeft: 8 }}>Refresh</button>
      </div>
      {loading && <p>Loading cats...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
        {cats.map((cat) => (
          <div key={cat.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={cat.url} alt="Cat" width="100%" style={{ borderRadius: 8 }} />
            <p>ID: {cat.id}</p>
            <p>Width: {cat.width}px</p>
            <p>Height: {cat.height}px</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;