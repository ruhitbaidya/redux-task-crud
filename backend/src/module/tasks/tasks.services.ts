import { TTasks } from "./tanksInterface";
import { tasksModel } from "./tasksModel";

const createTasks = async (task: TTasks) => {
  const result = await tasksModel.create(task);
  return result;
};

const readTasks = async (texts: Record<string, unknown>) => {
  let text: Record<string, unknown> = {};
  const { cat } = texts;
  const result = await tasksModel.find({ profession: texts });
};
const updateTask = async (id: string, tasks: Partial<TTasks>) => {
  const result = await tasksModel.findByIdAndUpdate(
    id,
    { ...tasks },
    { new: true }
  );
  return result;
};

const deleteTask = async (id: string) => {
  const result = await tasksModel.findByIdAndDelete(id);
  return result;
};
export const taskServices = {
  createTasks,
  updateTask,
  deleteTask,
};
