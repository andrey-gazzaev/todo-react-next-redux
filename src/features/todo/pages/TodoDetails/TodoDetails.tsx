import Link from "next/link";
import { useParams } from "next/navigation";
import { memo } from "react";

const TodoDetailsPageComponent = () => {
  const params = useParams<{ id: string }>();
  const id = params?.id;

  return (
    <main>
      <h1>Todo Details</h1>
      <p>Todo ID: {id}</p>
      <Link href="/todo">Back to Todo</Link>
    </main>
  );
};

/** Todo details page component. Display a todo item details. */
export const TodoDetailsPage = memo(TodoDetailsPageComponent);