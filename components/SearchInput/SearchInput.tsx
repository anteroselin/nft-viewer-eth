import { FC } from "react";
import { ISearchInput } from "./types";

const SearchInput: FC<ISearchInput> = ({
  text = "",
  className = "",
  onChangeHandler = () => {},
  onClickHandler = () => {},
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onClickHandler();
    }
  };

  return (
    <div className={`${className} relative`}>
      <input
        className="w-full text-2 pl-4 pr-10 py-2 rounded-md border-2 border-black"
        onChange={(e) => onChangeHandler(e.target.value)}
        onKeyDown={handleKeyPress}
        value={text}
        placeholder="Search owner address"
      ></input>
      <button onClick={onClickHandler} className="absolute right-4">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#200E32"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            transform="translate(2 2)"
          >
            <circle cx="9.767" cy="9.767" r="8.989" />
            <line x1="16.018" x2="19.542" y1="16.485" y2="20" />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default SearchInput;
