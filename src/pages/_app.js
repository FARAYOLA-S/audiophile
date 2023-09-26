import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header></header>
      <main>
        <Component {...pageProps} />
      </main>

      <footer></footer>
    </>
  );
}
