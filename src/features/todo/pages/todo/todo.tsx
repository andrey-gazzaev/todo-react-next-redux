import { memo } from "react";

import styles from "./todo.module.css";
import Link from "next/link";

const TodoPageComponent = () => {
  return (
    <main className={styles.page}>
      <h1 className={styles.page__title}>Todo</h1>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/todo/1">Todo 1</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/todo/2">Todo 2</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/todo/3">Todo 3</Link>
        </li>
      </ul>
    </main>
  );
};

/** Todo page component. Display a list of todos. */
export const TodoPage = memo(TodoPageComponent);
