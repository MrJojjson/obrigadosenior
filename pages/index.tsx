import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Obrigado Senior</title>
        <meta name="description" content="Obrigado Senior" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Obrigado Senior</h1>
      </main>
    </div>
  );
};

export default Home;
