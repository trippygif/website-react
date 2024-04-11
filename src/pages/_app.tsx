import type { AppProps } from "next/app";
import { roboto_mono } from "@/app/fonts";
import "@/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto_mono.className}>
      <Component {...pageProps} />
    </main>
  );
}
