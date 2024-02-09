import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { AppProps } from "next/app";

config.autoAddCss = false;
library.add(fas);

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
