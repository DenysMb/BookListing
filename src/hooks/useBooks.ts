import { useState, useEffect } from "react";
import api from "../api";

export type BookProps = {
  title: string;
  description: string;
  publishDate: string;
  excerpt: string;
  pageCount: number;
  id: number;
};

const useBooks = () => {
  const [data, setData] = useState<BookProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!data.length) {
      setLoading(true);

      api
        .get("Books")
        .then(({ data }) => {
          setData(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return { loading, data };
};

export default useBooks;
