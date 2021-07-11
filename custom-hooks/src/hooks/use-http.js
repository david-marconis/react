import { useState, useCallback } from "react";

const useHttp = url => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async requestConfig => {
      const { init, consumeData } = requestConfig;
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url, init);

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();
        if (consumeData) {
          consumeData(data);
        }
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [url]
  );

  return { isLoading, error, sendRequest };
};

export default useHttp;
