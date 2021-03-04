import React from "react";
import "./SearchPage.css";
import useGoogleSearch from "../useGoogleSearch";
import { useStateValue } from "../reducer/StateProvider";

import Header from "../components/Header";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();

  const { data } = useGoogleSearch(term);
  console.log(data);

  return (
    <div className="search__page">
      <Header />
      {term && (
        <div className="resultPage">
          <div className="searchAbout">
            <p>
              Yaklaşık {data?.searchInformation.formattedTotalResults} sonuç
              bulundu ({data?.searchInformation.formattedSearchTime} saniye)
            </p>
          </div>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink} ▾
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>

              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
