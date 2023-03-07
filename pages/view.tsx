import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import SearchInput from "../components/SearchInput/SearchInput";
import NFTCard from "../components/NFTCard/NFTCard";
import { useSelector } from "react-redux";
import { getAllNftData, INFT } from "../lib/store/actions/nftsActions";
import Modal from "../components/Modal/Modal";

const View: NextPage = () => {
  const [totalNFTs, setTotalNFTs] = useState<any[]>([]);
  const [nft, setNFT] = useState<INFT>();
  const [address, setAddress] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const nfts = useSelector((state: any) => state.nfts);

  const setNFTData = async (key: string) => {
    const res = await getAllNftData(key);
    if (res) setTotalNFTs(res);
  };

  const onSearch = async () => {
    setTotalNFTs([]);
    if (address === "") {
      alert("Please input owner address");
      return;
    }
    setLoading(true);
    await setNFTData(address);
    setLoading(false);
  };

  useEffect(() => {
    if (nfts.owner_address) {
      (async () => {
        setLoading(true);
        await setNFTData(nfts.owner_address);
        setLoading(false);
      })();
    }
  }, [nfts.owner_address]);

  return (
    <div className="p-12">
      <div className="flex flex-row align-center justify-center">
        <span className="text-4xl mr-10 font-bold"> NFT Viewer </span>
        <SearchInput
          className="flex flex-row w-1/2 items-center justify-center"
          text={address}
          onClickHandler={onSearch}
          onChangeHandler={setAddress}
        ></SearchInput>
      </div>
      <div className="p-8">
        <div className="flex">
          <div className="flex flex-wrap mt-16 gap-4 w-full justify-center">
            {!loading ? (
              totalNFTs.length !== 0 ? (
                <>
                  {totalNFTs.map((nft, key) => {
                    return (
                      <NFTCard
                        key={key}
                        name={nft.name}
                        image_url={nft.image_url}
                        tokenAddress={nft.tokenAddress}
                        onClick={() => {
                          setNFT(nft);
                          setModalOpen(true);
                        }}
                      ></NFTCard>
                    );
                  })}
                </>
              ) : (
                <>
                  <p className="text-center font-bold text-red-300 text-3xl">
                    No NFTs
                  </p>
                </>
              )
            ) : (
              <>
                <p className="text-center font-bold text-green-300 text-3xl">
                  Loading...
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        nft={nft}
      ></Modal>
    </div>
  );
};

export default View;
