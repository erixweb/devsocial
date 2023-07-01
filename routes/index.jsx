import { Head } from "$fresh/runtime.ts";
import Navigation from "../components/Navigation.jsx";
import { useSignal } from "@preact/signals"
import FeedOptions from "../islands/FeedOptions.jsx";

export default function HomePage() {

  return (
    <>
      <Head>
        <title>Devsocial</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <Navigation />
      <main>
        <FeedOptions />
      </main>
    </>
  );
}
