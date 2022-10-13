import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useQuery, gql, DocumentNode } from "@apollo/client";
import Input from "../components/search/Input";
import Link from "next/link";
import SearchResult from "../components/SearchResult/SearchResult";
import { SUGGEST_QUERY, SEARCH_QUERY } from "../graphql/queries";
import { useEffect, useState } from "react";
const dummyData = [{ title: "hej" }];
const Find: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading, error, refetch } = useQuery(SUGGEST_QUERY, {
    variables: {
      worktype: null,
      suggesttype: "TITLE",

      q: "",
      offset: 0,
      limit: 100,
    },
  });
  useEffect(() => {
    refetch({
      q: searchQuery,
    });
  }, [searchQuery]);

  if (error) {
    console.log("error");
    return <h1>Error</h1>;
  }
  const hitcount = data?.search?.hitcount;
  const works = data?.suggest?.result?.map((w: any) => w.work);
  console.log("works", works);
  return (
    <div className={styles.container}>
      <h1>Det nye-nye-bibliotek.dk - Search</h1>
      <Link href="/">
        <h3
          style={{
            color: "white",
            border: "2px solid darkcyan",
            padding: "5px",
            maxWidth: "150px",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          ⬅️ Tilbage
        </h3>
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "40px",
          paddingBottom: "30px",
          borderBottom: "1px solid white",
        }}
      >
        <Input searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <SearchResult
      //  data={dummyData}
        hitcount={hitcount}
        loading={loading}
        works={works}
      />
    </div>
  );
};

export default Find;
