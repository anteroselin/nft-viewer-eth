import type { NextPage } from "next";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchInput from "../components/SearchInput/SearchInput";
import { OWNER_ADDRESS } from "../lib/store/types";
import { useDispatch } from "react-redux";

const Home: NextPage = () => {
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const goView = () => {
    if (address === "") {
      alert("Please input owner address");
      return;
    }
    dispatch({
      type: OWNER_ADDRESS,
      payload: address,
    });
    router.push("/view");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Viewer</title>
        <meta name="description" content="NFT Viewr" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className={`${styles.main}`}>
        <span className="text-6xl mb-16 font-bold"> NFT Viewer </span>
        <SearchInput
          className="flex flex-row w-1/2 items-center justify-center"
          text={address}
          onChangeHandler={setAddress}
          onClickHandler={goView}
        ></SearchInput>
      </main>
    </div>
  );
};

export default Home;
