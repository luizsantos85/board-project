import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocumento extends Document {
   render() {
      return (
         <Html>
            <Head></Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}
