import AlturaProvider from "@/components/context/context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AlturaProvider>
      <Component {...pageProps} />
    </AlturaProvider>
  );
}
