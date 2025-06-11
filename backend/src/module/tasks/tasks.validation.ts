import { z } from "zod";


const tasksValidationSchema = z.object({
    firstName : z.string(),
    lastName : z.string(),
    email : z.string(),
    profession : z.string()
});

const updateTasksSchema = z.object({
    firstName : z.string().optional(),
    lastName : z.string().optional(),
    email : z.string().optional(),
    profession : z.string().optional()
})
export const updateTaskSchema = updateTasksSchema
export default tasksValidationSchema