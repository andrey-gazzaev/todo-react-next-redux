import { TaskApiService } from "@/core/services/taskApi";
import { TodoPage } from "@/features/todo/pages/Todo";


/** Todo page route. */
export default async function Todo(
) {
  const tasks = await TaskApiService.getTasks();

  return <TodoPage tasks={tasks} />;
}