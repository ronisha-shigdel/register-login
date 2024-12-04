import type { AppProps } from "next/app";
import "../styles/global.css"; // Make sure this file exists for Tailwind CSS

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
