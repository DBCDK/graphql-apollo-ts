import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useQuery, gql, DocumentNode } from "@apollo/client";
import Link from "next/link";
import { useRouter } from 'next/router'

import { useEffect, useState } from "react";
import { useBananaQuery, useGetWorkQuery, Work } from "../../graphql/generated/schema";

const dummyData = [{ title: "hej" }];
const WorkPage: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter()
  const { id } = router.query;
 /* const { data, loading, error, refetch } = useGetWorkQuery({variables:{
   id:  id as string 
  }})*/

  const { data, loading, error, refetch } = useBananaQuery({variables:{
    id: 'work-of:870970-basis:48121543'
   }})
if(loading){
    return <h1>loading</h1>;
}
if (error) {
    console.log("error",error);
    return <h1>Error</h1>;
  }
console.log('workdpage data : ',data?.work)
/*
  if (error) {
    console.log("error");
    return <h1>Error</h1>;
  }*/

console.log('id',id)
  return (
    <div className={styles.container}>
      <h1>Det nye-nye-bibliotek.dk - WorkPage</h1>
      <div onClick={()=>router.back()}>
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
          justifyContent: "center",
          paddingTop: "40px",
          paddingBottom: "30px",
          borderBottom: "1px solid white",
        }}
      >

</div>
<h1>Work page id {id} </h1>      


    </div>
  );
};

export default WorkPage;
