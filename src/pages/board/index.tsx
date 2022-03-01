import Head from "next/head";
import {FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock} from 'react-icons/fi'
import SupportButton from "../../components/SupportButton";
import styles from "./styles.module.scss";

export default function Board() {
   return (
      <>
         <Head>
            <title>Minhas tarefas - Board</title>
         </Head>
         <main className={styles.container}>
            <form>
               <input type="text" placeholder="Digite sua tarefa"/>
               <button type="submit">
                  <FiPlus size={25} color="#17181f"/>
               </button>
            </form>

            <h1>Você tem duas tarefas</h1>
            <section>
               <article className={styles.taskList}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, ea nam voluptas tempora unde qui vitae nihil laudantium. Harum fugit modi dolor ipsam vitae, possimus voluptate ullam. Non, nam voluptas.</p>
                  <div className={styles.actions}>
                     <div>
                        <div>
                           <FiCalendar size={20} color="#ffb800" />
                           <time>01 março 2022</time>
                        </div>
                        <button>
                           <FiEdit2 size={20} color="#fff"/>
                           <span>Editar</span>
                        </button>
                     </div>
                     <button>
                        <FiTrash size={20} color="#ff3636"/>
                        <span>Excluir</span>
                     </button>
                  </div>
               </article>
            </section>
         </main>

         <div className={styles.vipContainer}>
            <h3>
               Obrigado por apoiar esse projeto.
            </h3>
            <div>
               <FiClock size={28} color="#fff"/>
               <time>Última doação foi a 3 dias.</time>
            </div>
         </div>

         <SupportButton />
      </>
   );
}
