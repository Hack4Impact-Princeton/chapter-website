import "../globals.css";


export default function MyApp({
  Component,
  pageProps: { ...pageProps },
}) {
  return (
    <main>
        <Component {...pageProps} />
    </main>
  );
}
