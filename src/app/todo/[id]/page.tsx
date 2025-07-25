import { TaskApiService } from "@/core/services/taskApi";
import { TodoDetailsPage } from "@/features/todo/pages/TodoDetails";

export default async function TodoItem({params}: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const task = await TaskApiService.getTaskById(id);

  return <TodoDetailsPage task={task} />;
}