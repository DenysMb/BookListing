import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import Home from "./features/Home";

type DataContextProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  filteredTitle: string;
  setFilteredTitle: Dispatch<SetStateAction<string>>;
  filteredPublishDate: string;
  setFilteredPublishDate: Dispatch<SetStateAction<string>>;
};

const initialContextValue = {
  page: 1,
  setPage: () => null,
  filteredTitle: "",
  setFilteredTitle: () => null,
  filteredPublishDate: "",
  setFilteredPublishDate: () => null,
};

export const DataContext = createContext<DataContextProps>(initialContextValue);

const App = () => {
  const [page, setPage] = useState(1);
  const [filteredTitle, setFilteredTitle] = useState("");
  const [filteredPublishDate, setFilteredPublishDate] = useState("");

  return (
    <DataContext.Provider
      value={{
        page,
        setPage,
        filteredTitle,
        setFilteredTitle,
        filteredPublishDate,
        setFilteredPublishDate,
      }}
    >
      <Home />
    </DataContext.Provider>
  );
};

export default App;
