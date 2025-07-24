import { BaseFilterParams } from "../models/baseFilterParams";
import { Task } from "../models/task";

export namespace TaskApiService {
  /** Gets tasks */
  export async function getTasks(
    filter: BaseFilterParams.Combined = BaseFilterParams.DEFAULT
  ): Promise<Task[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          new Array(filter.pageSize)
            .fill(0)
            .map((_, index) => ({
              id: `task-${index + (filter.pageNumber ?? 0)}`,
              title: `Task ${index + (filter.pageNumber ?? 0)}`,
              description: `Description ${index + (filter.pageNumber ?? 0)}`,
              isCompleted: false,
            }))
            .filter(
              (task) =>
                task.title
                  .toLowerCase()
                  .includes(filter.search?.toLowerCase() ?? "") ||
                task.description
                  .toLowerCase()
                  .includes(filter.search?.toLowerCase() ?? "")
            )
        );
      }, 1000);
    });
  }

  /** Gets a task by id */
  export async function getTaskById(id: string): Promise<Task> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          title: `Task ${id}`,
          description: `Description ${id}`,
          isCompleted: false,
        });
      }, 1000);
    });
  }
}
