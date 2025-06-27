import { memo } from "react";

import styles from "./todo.module.css";

const TodoPageComponent = () => {
  return (
    <main className={styles.page}>
      <h1 className={styles.page__title}>Todo</h1>
      <ul className={styles.list}>
        <li className={styles.listItem}>Todo 1</li>
        <li className={styles.listItem}>Todo 2</li>
        <li className={styles.listItem}>Todo 3</li>
      </ul>
    </main>
  );
};

/** Todo page component. Display a list of todos. */
export const TodoPage = memo(TodoPageComponent);
