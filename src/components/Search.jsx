import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "./Search.css";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import { useStateValue } from "../reducer/StateProvider";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../reducer/reducer";

const Search = ({ hideButtons = false }) => {
  const history = useHistory();
  const [{}, dispatch] = useStateValue();
  const [term, setTerm] = useState("");

  const search = (e) => {
    e.preventDefault();
    console.log("basıldı");
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: term,
    });

    history.push("/search");
  };

  return (
    <form>
      <div className="search">
        <div className="search__bar">
          <SearchIcon />

          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <KeyboardIcon />
          <MicIcon />
        </div>
        {!hideButtons ? (
          <div className="search__buttons">
            <button onClick={search} type="submit" variant="outlined">
              Google'da Ara
            </button>
            <button variant="outlined">Kendimi Şanslı Hissediyorum</button>
          </div>
        ) : (
          <div className="search__buttons">
            <button
              className="search__buttonsHidden"
              onClick={search}
              type="submit"
              variant="outlined"
            >
              Google'da Ara
            </button>
            <button className="search__buttonsHidden" variant="outlined">
              Kendimi Şanslı Hissediyorum
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default Search;
