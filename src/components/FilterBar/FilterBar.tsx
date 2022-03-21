import React, { useContext } from "react";
import { DataContext } from "../../App";
import Styles from "./FilterBar.module.scss";

const FilterBar = () => {
  const {
    filteredTitle,
    filteredPublishDate,
    setFilteredTitle,
    setFilteredPublishDate,
  } = useContext(DataContext);

  return (
    <div className={Styles.FilterBarContainer}>
      <div className={Styles.InputContainer}>
        <p>Book's title</p>
        <input
          type="text"
          className={Styles.TitleInput}
          value={filteredTitle}
          onChange={(ev) => setFilteredTitle(ev.target.value)}
        />
      </div>

      <div className={Styles.InputContainer}>
        <p>Book's publish date</p>
        <input
          type="date"
          className={Styles.DateInput}
          onChange={(el) => {
            const newDate = new Date(
              el.target.valueAsNumber
            ).toLocaleDateString();

            setFilteredPublishDate(newDate ? newDate : "");
          }}
        />
      </div>
    </div>
  );
};

export default FilterBar;
