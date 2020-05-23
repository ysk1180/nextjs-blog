import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>first post だよ</title>
      </Head>
      <h1>yeee</h1>
      <h2>
        <Link href="/">
          <a>back</a>
        </Link>
      </h2>
    </Layout>
  );
}
