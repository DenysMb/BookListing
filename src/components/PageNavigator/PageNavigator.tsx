import React, { useContext } from "react";
import { DataContext } from "../../App";
import Styles from "./PageNavigator.module.scss";

const PageNavigator = ({ maxPage }: { maxPage: number }) => {
  const { page, setPage } = useContext(DataContext);

  const handlePage = (value: number) => {
    window.scrollTo(0, 0)

    if (value <= 0) {
      setPage(0);
      return;
    }

    if (value >= maxPage) {
      setPage(maxPage);
      return;
    }

    setPage(value);
  };

  return (
    <div className={Styles.PageNavigatorContainer}>
      <button onClick={() => handlePage(page - 1)}>Back</button>

      <p>
        {page} / {maxPage}
      </p>

      <button onClick={() => handlePage(page + 1)}>Next</button>
    </div>
  );
};

export default PageNavigator;
