import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
//import styles from "../styles/Home.module.css"; this will throw error
import { useQuery, gql, DocumentNode } from "@apollo/client";
import Link from "next/link";
import { SearchItem } from "../../interfaces/globalInterfaces";
import React, { FC } from "react";
import { Work } from "../../graphql/generated/schema";
/*interface Work {
    creators:{displayname: string}[]
    
}*/
interface Props {
  hitcount?: number;
  loading: boolean;
  works: Work[];
}

// const Find = ({ hitcount,  loading, works }: Props) => { is better syntax than  const Find: FC<Props> = ({ hitcount,  loading, works }) => {

const SearchResult = ({ hitcount, loading, works }: Props) => {
  if (loading) {
    <p>Henter..</p>;
  }
  return (
    <>
      {<h1>Search results {` `}</h1>}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {works
          //  ?.filter((obj) => obj.manifestations.first.cover.detail)
          ?.map((obj) => {
              console.log('obj',obj)
            const img = obj.manifestations.first.cover.detail as
              | string
              | undefined;

              //typecast variables to string | undefinedd  
            return (
                <Link href={`/work/${obj.workId}`}>
                
              <div
                style={{
                  width: "200px",
                  height: "300px",
                  marginBottom: "40px",
                  backgroundColor: "brown",
                  textAlign: "center",
                  cursor:'pointer'
                }}
              >
                <img src={img} style={{ width: "200px" }} />
                <p>{obj.titles.main[0]}</p>
              </div>
              </Link>

            );
          })}
      </div>
    </>
  );
};

export default SearchResult;
