import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useQuery, gql, DocumentNode } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import { useGetWorkQuery, Work } from "../../graphql/generated/schema";

const dummyData = [{ title: "hej" }];
const WorkPage: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { id } = router.query;
  /* const { data, loading, error, refetch } = useGetWorkQuery({variables:{
   id:  id as string 
  }})*/

  const { data, loading, error, refetch } = useGetWorkQuery({
    variables: {
      id: id as string,
    },
  });
  if (loading) {
    return <h1>loading</h1>;
  }
  if (error) {
    console.log("error", error);
    return <h1>Error</h1>;
  }
  console.log("workdpage data : ", data?.work);

  const img: string = data?.work?.manifestations.first.cover.detail;
  return (
    <div className={styles.container}>
      <h1>Det nye-nye-bibliotek.dk - WorkPage </h1>

      <div onClick={() => router.back()}>
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
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "40px",
          paddingBottom: "70px",
          borderTop: "1px solid white",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "450px",
            marginBottom: "40px",
            backgroundColor: "brown",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <img src={img} style={{ width: "300px" }} />
          <p>
            <b> {data?.work?.titles?.full[0]} </b>
          </p>
          <p>{data?.work?.creators.map((c) => c.display).join(", ")}</p>
        </div>

        <div style={{ maxWidth: "400px" }}>
          <h2> {data?.work?.titles?.full[0]}</h2>

          <p>{data?.work?.abstract ? data?.work?.abstract[0] : ""}</p>
          <p>
            {" "}
            Sprog: {data?.work?.mainLanguages[0]?.display.toLocaleUpperCase()}
          </p>
          <p>
            <b>Subjects: </b>
            {data?.work?.subjects.all.map((s) => s.display).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
