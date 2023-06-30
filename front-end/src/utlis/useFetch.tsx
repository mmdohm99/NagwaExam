import { useState, useEffect, useCallback } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
// custom hook uses axios to fetch data
const useFetch = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(
    axiosParams.method === "post" || axiosParams.method === "get"
  );

  const fetchData = useCallback(async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      setResponse(result);
    } catch (err) {
      setError(
        err as React.SetStateAction<AxiosError<unknown, any> | undefined>
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const sendData = useCallback(() => {
    fetchData(axiosParams);
  }, [axiosParams, fetchData]);

  useEffect(() => {
    if (axiosParams.method === "post" || axiosParams.method === "get") {
      fetchData(axiosParams);
    }
  }, []);

  return { response, error, loading, sendData };
};

export default useFetch;
