import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { main } from "../TSexamples/Main";

const Playground: NextPage = () => {
  const [logs, setLogs] = useState<string[]>([]);


  let logItem: Function; //Function type
  logItem = (item: any): void => {
    const newAr: string[] = [...logs, JSON.stringify(item)];
    setLogs(newAr);
  };
  useEffect(()=>{
    main(logItem);
  },[0])

  return (
    <div className={styles.container}>
      <h1>Det nye-nye-bibliotek.dk - WorkPage </h1>
      <button onClick={()=>setLogs([])}>Clear</button>
      {logs.map(l=><p>{l}</p>)}
    </div>
  );
};

export default Playground;
