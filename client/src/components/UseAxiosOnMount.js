import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosOnMount = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = () => {
    setError(null);

    try {
      let res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading, error };
};

export default useAxiosOnMount;