import { Head } from "$fresh/runtime.ts";
import Navigation from "../components/Navigation.jsx";
import Recommended from "../islands/Recommended.jsx";
import FeedOptions from "../islands/FeedOptions.jsx";
import { Store, Stores } from "@store"

export default function HomePage() {
  const store = Store.newPointer()

  return (
    <>
      <Head>
        <title>Devsocial</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <Navigation />
      <main>
        <FeedOptions store={store} />
        <Recommended store={store} />
      </main>
    </>
  );
}
