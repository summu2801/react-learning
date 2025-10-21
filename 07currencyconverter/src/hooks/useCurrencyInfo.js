import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.rates || {}); // ✅ Use 'rates' instead of res[currency]
      })
      .catch((err) => {
        console.error("Currency API error:", err);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
