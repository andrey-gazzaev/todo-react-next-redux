import { Task } from "@/core/models/task";
import Link from "next/link";
import { memo } from "react";

type Props = Readonly<{
  task: Task;
}>;

const TodoDetailsPageComponent = ({ task }: Props) => {
  return (
    <section>
      <h2>Todo Details</h2>
      <p>Todo ID: {task.id}</p>
      <Link href="/todo">Back to Todo</Link>
    </section>
  );
};

TodoDetailsPageComponent.displayName = "TodoDetailsPage";

/** Todo details page component. Display a todo item details. */
export const TodoDetailsPage = memo(TodoDetailsPageComponent);