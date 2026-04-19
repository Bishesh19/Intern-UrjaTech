import { useState, useEffect } from 'react';

function useFetch(fetchFn) {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    let cancelled = false; 
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchFn();
        if (!cancelled) setData(result.data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => { cancelled = true; };
  }, []);

  return { data, loading, error };
}

export default useFetch;