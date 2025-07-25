import { memo } from "react";

import styles from "./todo.module.css";
import Link from "next/link";
import { Task } from "@/core/models/task";

type Props = Readonly<{
  tasks: Task[];
}>;

const TodoPageComponent = ({ tasks }: Props) => {
  return (
      <ul className={styles.list}>
        {tasks.map((task) => (
          <li className={styles.listItem} key={task.id}>
            <Link href={`/todo/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>    
  );
};

/** Todo page component. Display a list of todos. */
export const TodoPage = memo(TodoPageComponent);
