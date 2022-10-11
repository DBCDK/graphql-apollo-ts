import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
//import styles from "../styles/Home.module.css"; this will throw error
import { useQuery, gql, DocumentNode } from "@apollo/client";
import Link from "next/link";
import { SearchItem } from "../../interfaces/globalInterfaces";
import React, { FC } from "react";
/*interface Work {
    creators:{displayname: string}[]
    
}*/
interface Props {
  data: SearchItem[];
  hitcount: number;
  loading: boolean;
  works: any[];
}

const Find: FC<Props> = ({ hitcount, data, loading, works }) => {
  if (loading) {
    <p>Henter..</p>;
  }
  return (
    <>
     { <h1>Search results {`${hitcount}  `}</h1>}

      <div style={{ display: "grid",  gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
        {works
          ?.filter((obj) => obj.manifestations.first.cover.detail)
          .map((obj) => {
            return (
              <div style={{}}>
                <img src={obj.manifestations.first.cover.detail} style={{width:'200px'}} />
                <p>{obj.titles.main[0]}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Find;
