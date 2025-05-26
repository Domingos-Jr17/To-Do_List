

export type Task = {
  text: string;
  completed: boolean;
};

export type TaskProps = {
  tasks: Task[];
  removeTask: (i: number) => void;
  toggleTask: (i: number) => void;
};


export type ImputProps = {
  newTask: string;
  setNewTask: (task: string) => void;
  addTask: () => void;
};
