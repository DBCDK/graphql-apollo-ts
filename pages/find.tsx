import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useQuery, gql, DocumentNode } from "@apollo/client";
import Input from "../components/search/Input";
import Link from "next/link";

const Find: NextPage = () => {
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
              textAlign:'center'

            }}
          >
       ⬅️ Go back
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
        <Input />
      </div>
    </div>
  );
};

export default Find;
