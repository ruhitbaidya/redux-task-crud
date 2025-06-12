import { catchAsyncFun } from "../../utils/catchHandelError";
import { sendResponse } from "../../utils/sendResponse";
import { taskServices } from "./tasks.services";

const createTasks = catchAsyncFun(async (req, res) => {
  console.log(req.body);
  //   const result = await taskServices.createTasks(req.body);
  //   sendResponse(res, {
  //     status: 200,
  //     success: true,
  //     message: "Task Create Success",
  //     result: result,
  //   });
});

export const tasksControler = {
  createTasks,
};
