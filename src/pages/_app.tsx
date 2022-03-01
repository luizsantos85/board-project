import { Header } from "../components/Header";
import { AppProps } from "next/app";
import { Provider as NextAuthProvider } from "next-auth/client";
import "../styles/globalStyle.scss";

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <NextAuthProvider session={pageProps.session}>
         <Header />
         <Component {...pageProps} />
      </NextAuthProvider>
   );
}

export default MyApp;
