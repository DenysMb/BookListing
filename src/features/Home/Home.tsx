import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import FilterBar from "../../components/FilterBar";
import PageNavigator from "../../components/PageNavigator";
import useBooks, { BookProps } from "../../hooks/useBooks";
import Styles from "./Home.module.scss";

const Home = () => {
  const { data, loading } = useBooks();
  const { page, filteredTitle, filteredPublishDate } = useContext(DataContext);
  const [filtered, setFiltered] = useState<BookProps[]>([]);

  useEffect(() => {
    const newFiltered = data.filter((book, index) => {
      if (filteredTitle || filteredPublishDate) {
        if (filteredTitle && book.title.includes(filteredTitle)) {
          return book;
        }

        // if (
        //   filteredPublishDate &&
        //   new Date(book.publishDate).toLocaleDateString() ===
        //     filteredPublishDate
        // ) {
        //   return book;
        // }
      } else {
        if (index >= (page - 1) * 10 && index < page * 10) {
          return book;
        }
      }
    });

    setFiltered(newFiltered);
  }, [data, page, filteredTitle, filteredPublishDate]);

  return (
    <div className={Styles.HomeContainer}>
      {loading && (
        <div className={Styles.Loading}>
          <div className={Styles.LoadingText}>Carregando</div>
        </div>
      )}

      <FilterBar />

      <div className={Styles.BookList}>
        {filtered.map((book, index) => (
          <Book data={book} key={"Book-" + index} />
        ))}
      </div>

      {!filteredTitle && (
        <PageNavigator maxPage={Math.ceil(data.length / 10)} />
      )}
    </div>
  );
};

const Book = ({
  data,
}: {
  data: { title: string; description: string; publishDate: string };
}) => (
  <div className={Styles.Book}>
    <p className={Styles.BookRow}>
      <span className={Styles.BookRowLabel}>Title:</span> {data.title}
    </p>
    <p className={Styles.BookRow}>
      <span className={Styles.BookRowLabel}>Description:</span>{" "}
      {data.description}
    </p>
    <p className={Styles.BookRow}>
      <span className={Styles.BookRowLabel}>Publish date:</span>{" "}
      {new Date(data.publishDate).toLocaleDateString()}
    </p>
  </div>
);

export default Home;
