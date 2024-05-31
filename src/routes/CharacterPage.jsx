// React
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components

import ErrorPage from "./Error";
import CharacterPageContent from "../components/sections/CharacterPageContent/CharacterPageContent";

const CharacterPage = () => {
  const path = window.location.pathname.split("/").slice(-1);
  const [data, setData] = useState(null);
  useEffect(() => {
    let url = `https://rickandmortyapi.com/api/character/${path}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <aside className="close item-page">
        <Link to="/">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.64999 18L17.45 27.8C17.85 28.2 18.042 28.6666 18.026 29.2C18.01 29.7333 17.8013 30.2 17.4 30.6C17 30.9666 16.5333 31.1586 16 31.176C15.4667 31.1933 15 31.0013 14.6 30.6L1.39999 17.4C1.19999 17.2 1.05799 16.9833 0.97399 16.75C0.88999 16.5166 0.849324 16.2666 0.851991 16C0.854657 15.7333 0.896657 15.4833 0.97799 15.25C1.05932 15.0166 1.20066 14.8 1.40199 14.6L14.602 1.39997C14.9687 1.03331 15.4273 0.849976 15.978 0.849976C16.5287 0.849976 17.0033 1.03331 17.402 1.39997C17.802 1.79997 18.002 2.27531 18.002 2.82598C18.002 3.37664 17.802 3.85131 17.402 4.24998L7.64999 14H30C30.5667 14 31.042 14.192 31.426 14.576C31.81 14.96 32.0013 15.4346 32 16C31.9987 16.5653 31.8067 17.0406 31.424 17.426C31.0413 17.8113 30.5667 18.0026 30 18H7.64999Z"
              fill="#00B5CD"
            />
          </svg>
        </Link>
      </aside>
      {Number(path[0]) > 826 ? (
        <ErrorPage />
      ) : (
        <CharacterPageContent data={data} />
      )}
    </>
  );
};

export default CharacterPage;
