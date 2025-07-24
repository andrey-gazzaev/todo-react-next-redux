/** Represents a single task in the todo application. */
export type Task = Readonly<{

  /** Unique identifier for the task. */
  id: string;

  /** Short title or summary of the task. */
  title: string;

  /** Detailed description of the task. */
  description: string;

  /** Indicates whether the task is completed. */
  isCompleted: boolean;
}>;