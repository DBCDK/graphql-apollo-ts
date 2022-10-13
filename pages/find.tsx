import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useQuery, gql, DocumentNode } from "@apollo/client";
import Input from "../components/search/Input";
import Link from "next/link";
import SearchResult from "../components/SearchResult/SearchResult";
import { useEffect, useState } from "react";
import {
  SuggestionType,
  useSuggestionQuery,
  Work,
} from "../graphql/generated/schema";
const Find: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading, error, refetch } = useSuggestionQuery({
    variables: {
      worktype: null,
      suggesttype: SuggestionType.Title,
      q: "",
    },
  });



  useEffect(() => {

    const q:string = searchQuery.length>0 ?searchQuery :'fodbold'; 
    refetch({
      q:q 
    });
  }, [searchQuery]);

  if (error) {
    console.log("error", error);
    return <h1>Error</h1>;
  }
  if (data?.suggest) {
    console.log("title!", data?.suggest?.result[0]?.work?.titles.main[0]);
  }
 // const hitcount = data?.search?.hitcount; //example of property that dosen't exist
  //const anotherVar = data?.suggest.result[0].work?.creators[0].
  let works: Work[] = data?.suggest?.result?.map((w) => w.work as Work)!;

  return (
    <div className={styles.container}>
      <h1>Det nye-nye-bibliotek.dk - find</h1>
      <Link href="/">
        <h3
          style={{
            color: "white",
            border: "2px solid darkcyan",
            padding: "5px",
            maxWidth: "150px",
            cursor: "pointer",
            textAlign: "center",
            borderRadius:'15px'

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
      //hitcount={hitcount} 
      loading={loading} works={works} />
    </div>
  );
};

export default Find;
