import styles from "./mainLayout.module.css";
import Link from "next/link";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.header__title}>Todo</h1>
      </header>

      <main className={styles.content}>{children}</main>
      
      <footer className={styles.footer}>
        <Link href="/about">About</Link>
      </footer>
    </div>
  );
};
