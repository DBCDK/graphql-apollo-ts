import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useQuery, gql, DocumentNode } from "@apollo/client";
import { useRouter } from "next/router";
import Link from "next/link";
interface Hero {
  description: string;
  image: {
    url: string;
    ogurl: string;
    alt: string;
    width: number;
    height: number;
  };
}
export function parseHero(data: any): Hero {
  const heros =
    data?.nodeQuery?.entities &&
    data.nodeQuery.entities.filter(
      (hero: any) => hero && hero.__typename === "NodeHeroFrontpage"
    );
  // grab the first - entities are sorted by last edit
  return (
    heros &&
    heros[0] && {
      description: heros[0].fieldHeroDescription,
      image: {
        alt: heros[0].fieldImage.alt,
        url: heros[0].fieldImage.url,
        width: heros[0].fieldImage.width,
        height: heros[0].fieldImage.height,
        ogurl: "/_next/image?url=" + heros[0].fieldImage.url + "&w=3840&q=75",
      },
    }
  );
}

const Home: NextPage = () => {
  const FRONT_PAGE_QUERY: DocumentNode = gql`
    {
      nodeQuery(
        limit: 40
        filter: {
          conditions: [
            { field: "type", value: ["hero_frontpage"] }
            { field: "status", value: "1" }
          ]
        }
        sort: [{ field: "changed", direction: DESC }]
      ) {
        entities {
          __typename
          ... on NodeHeroFrontpage {
            nid
            title
            entityPublished
            fieldHeroDescription
            fieldImage {
              alt
              title
              url
              width
              height
            }
          }
        }
      }
      monitor(name: "hero_frontpage")
    }
  `;

  const { data, loading, error, refetch } = useQuery(FRONT_PAGE_QUERY);
  if (loading) return <div>Loading</div>;
  if (error) return <div>error</div>;
  const heros: Hero = parseHero(data);
  console.log("heros", heros);
  console.log("data", data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Det nye-nye-bibliotek.dk</h1>
        <p className={styles.description}>
          <Link href="/find">
            <h3
              style={{
                color: "black",
                backgroundColor: "whitesmoke",
                padding: "10px",
              }}
            >
              Go to search
            </h3>
          </Link>
        </p>

        <img src={heros.image.url} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
