import AlturaProvider from "@/components/context/context";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <AlturaProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AlturaProvider>
  );
}
