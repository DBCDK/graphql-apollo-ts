import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
//import styles from "../styles/Home.module.css"; this will throw error
import { useQuery, gql, DocumentNode } from "@apollo/client";
import Link from "next/link";
import { SearchItem } from "../../interfaces/globalInterfaces";
import React, { FC } from "react";

interface Props {
  data: SearchItem[];
}

const Find: FC<Props> = (props) => {
  return (
    <div>
      <h1>Search results</h1>
      {props.data.map((obj) => (
        <p>{obj.title}</p>
      ))}
    </div>
  );
};

export default Find;
