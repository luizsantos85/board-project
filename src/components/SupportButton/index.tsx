import Link from "next/link";
import styles from "./styles.module.scss";

export default function SupportButton() {
   return <div className={styles.donateContainer}>
      <Link href="/donate">
         <a>Apoiar</a>
      </Link>
   </div>;
}
