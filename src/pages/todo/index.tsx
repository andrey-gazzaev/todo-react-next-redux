import { Task } from "@/core/models/task";
import { TaskApiService } from "@/core/services/taskApi";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { TodoPage } from "@/features/todo/pages/Todo";
 
export const getServerSideProps = (async () => {
  const tasks = await TaskApiService.getTasks();
  return { props: { tasks } }
}) satisfies GetServerSideProps<{ tasks: Task[] }>
 


/** Todo page route. */
export default function Todo(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { tasks } = props;

  return <TodoPage tasks={tasks} />;
}