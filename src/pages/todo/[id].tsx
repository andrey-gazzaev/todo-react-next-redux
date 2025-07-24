import { Task } from "@/core/models/task";
import { TaskApiService } from "@/core/services/taskApi";
import { TodoDetailsPage } from "@/features/todo/pages/TodoDetails";

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
export const getServerSideProps = (async (context) => {
  const { params } = context;
  const { id } = params as { id: string };
  if (!id) {
    throw new Error("Id is required");
  }
  const task = await TaskApiService.getTaskById(id);
  return { props: { task } }
}) satisfies GetServerSideProps<{ task: Task }>
 

export default function TodoItem(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { task } = props;

  return <TodoDetailsPage task={task} />;
}