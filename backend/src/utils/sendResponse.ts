import { Response } from "express";
type TResData<T> = {
  status: number;
  success: boolean;
  message: string;
  result: T;
};
export const sendResponse = <T>(res: Response, datas: TResData<T>) => {
  res.status(datas.status).json({
    success: datas.success,
    message: datas.message,
    data: datas.result,
  });
};
