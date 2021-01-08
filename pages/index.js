import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import unfetch from "isomorphic-unfetch";

function HomePage({ character }) {
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>
      <h1>Ana sayfa yazısı nı degıstırdım</h1>

      <ul>
        {character.results.map((character) => (
          <li key={character.id}>
            <Link href="/character/[id]" as={`/character/${character.id}`}>
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default HomePage;

export async function getStaticProps(cotext) {
  // data fetch

  const data = await fetch("https://rickandmortyapi.com/api/character/");
  const character = await data.json();
  console.log(character);
  return {
    props: {
      character,
    },
  };
}
