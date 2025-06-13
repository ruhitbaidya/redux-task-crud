import { catchAsyncFun } from "../../utils/catchHandelError";
import { sendResponse } from "../../utils/sendResponse";
import { taskServices } from "./tasks.services";

const getallTasks = catchAsyncFun(async(req, res)=>{
  const query = req.query;
  const result = await taskServices.readTasks(query)
  sendResponse(res, {status : 200, success : true, message : "Get all Product", result})
})
const createTasks = catchAsyncFun(async (req, res) => {
    const result = await taskServices.createTasks(req.body);
    sendResponse(res, {
      status: 200,
      success: true,
      message: "Task Create Success",
      result: result,
    });
});

const updateTasks = catchAsyncFun(async(req, res)=>{
  const id = req.params.id;
  const data = req.body;
  const result = await taskServices.updateTask(id, data);
  sendResponse(res, {status : 200, success : true, message : "Tasks Update Successfull", result})
})

const deleteTasks = catchAsyncFun(async(req, res)=>{
  const id = req.params.id
  const result = await taskServices.deleteTask(id)
})
export const tasksControler = {
  createTasks,
  updateTasks,
  deleteTasks,
  getallTasks
};
