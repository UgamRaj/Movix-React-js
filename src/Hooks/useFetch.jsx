import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    const getUrl = async () => {
      try {
        const res = await fetchDataFromApi(url);
        setLoading(false);
        setData(res);
      } catch (error) {
        setLoading(false);
        setError("Something went wrong!");
        console.log(error);
      }
    };
    getUrl();

    // fetchDataFromApi(url)
    //     .then((res) => {
    //         setLoading(false);
    //         setData(res);
    //     })
    //     .catch((err) => {
    //         setLoading(false);
    //         setError("Something went wrong!");
    //     });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
