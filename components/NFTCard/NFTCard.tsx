import React, { useEffect, FC } from "react";
import { getStyledAddress } from "../../utils";
import { INFTCard } from "./types";

const NFTCard: FC<INFTCard> = ({
  name = "",
  image_url = "key.jpg",
  tokenAddress = "",
  onClick,
}) => {
  return (
    <div className="rounded-xl bg-gray-200">
      <div className="relative">
        <img
          className="rounded-xl h-52 w-52 hover: cursor-pointer"
          src={image_url}
          alt="NFT Image"
          onClick={onClick}
        ></img>
        <svg
          className="absolute right-2 top-2 hover:cursor-pointer"
          width="30"
          height="30"
          viewBox="0 0 32 32"
        >
          <path
            d="M15.397 4.687l2.579 5.225a1 1 0 0 0 .753.547l5.766.838a1 1 0 0 1 .554 1.706l-4.173 4.067c-.236.23-.343.561-.288.885l.985 5.743a1 1 0 0 1-1.451 1.054l-5.158-2.712a1.002 1.002 0 0 0-.931 0l-5.158 2.712a1 1 0 0 1-1.451-1.054l.985-5.743a.999.999 0 0 0-.288-.885l-4.173-4.067a1 1 0 0 1 .554-1.706l5.766-.838a1 1 0 0 0 .753-.547L13.6 4.687c.37-.743 1.43-.743 1.797 0z"
            fill="#ffffff"
          />
        </svg>
      </div>
      <div className="px-4 py-2 overflow-hidden w-52">
        <p className="font-bold truncate"> {name} </p>
        <p> Token Addr: {getStyledAddress(tokenAddress)} </p>
      </div>
    </div>
  );
};

export default NFTCard;
