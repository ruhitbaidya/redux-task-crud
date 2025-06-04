import express, { Request, Response } from "express";
import cors from "cors";
import { tasksModel } from "./tasksModel";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// get posts
app.get("/api/v1/allData", async (req: Request, res: Response) => {
  try {
    const result = await tasksModel.find();
    res.status(200).json({ message: "Get All Data", result });
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/v1/createTask", async (req: Request, res: Response) => {
  try {
    const datas = req.body;
    const result = await tasksModel.create(datas);
    res.status(200).json({ messagte: "this port has done", result });
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/v1/get-singal/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await tasksModel.findById(id);
    res.status(200).json({ message: "Get Data Successfull", result });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/api/v1/delete-tasks/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await tasksModel.findByIdAndDelete(id, { new: true });
    res.status(200).json({ message: "This Task Is delete", result });
  } catch (err) {
    console.log(err);
  }
});
export default app;
