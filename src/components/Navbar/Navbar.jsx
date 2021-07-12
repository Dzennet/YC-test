import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
import useDebounce from "../../hooks/useDebounce";

function Navbar({ setSearch, setModalVariant }) {

  const [searchWord, setSearchWord] = useState("");
  const debouncedSearchTitle = useDebounce(searchWord, 500);

  useEffect(() => {
    if (debouncedSearchTitle) {
      setSearch(searchWord);
    }
  }, [searchWord]);

  const keyPressHandler = (event) => {
    if (event.key === "Enter") {
      setSearch(searchWord);
    }
  };

  return (
    <>
      <nav className={classes.nav}>
        <div className={(classes.nav_item, classes.nav_search)}>
          <input
            className={classes.nav_search}
            value={searchWord}
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
            type="text"
            placeholder="Поиск по заявкам..."
            onKeyPress={keyPressHandler}
          />
        </div>
        <div className={classes.nav_item}>
          <button className={classes.nav_btn} onClick={() => setModalVariant('createModal')}>Создать заявку</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
