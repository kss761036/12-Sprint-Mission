import React, { useEffect, useState } from "react";
import axios from "axios";

// axios 인스턴스 생성
const api = axios.create({
  baseURL: "https://panda-market-api.vercel.app/products/",
});

const useApi = (url) => {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [url]);

  return { data, loading, error };
};

export default useApi;
