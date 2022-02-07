import Head from "next/head";
import styles from "../styles/styles.module.scss";

export default function Home() {
   return (
      <>
         <Head>
            <title>Board - Organizador de Tarefas</title>
         </Head>

         <main className={styles.contentContainer}>
            <img src="/images/board-user.svg" alt="image_ferramenta" />

            <section className={styles.callToAction}>
               <h1>
                  Uma ferramenta para o seu dia a dia, Escreva, planeje e
                  organize-se...
               </h1>
               <p>
                  <span>100% gratuito</span> e online
               </p>
            </section>

            <div className={styles.donatersContainer}>
                  <h1>Apoiadores:</h1>
               <div className={styles.donaters}>
                  <img
                     src="https://sujeitoprogramador.com/steve.png"
                     alt="image_apoiador"
                  />
               </div>
            </div>
         </main>
      </>
   );
}
