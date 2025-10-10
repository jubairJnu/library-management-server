import { Response } from "express";

type TResponseData<T> = {
  success: boolean;
  message?: string | null;
  statusCode: number;
  data: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
};

const sendResposne = <T>(res: Response, data: TResponseData<T>) => {
  const responsePayload = {
    success: data.success,
    statusCode: data.success,
    data: data.data || null,
    meta: data.data,
  };

  res.status(data.statusCode).json(responsePayload);
};

export default sendResposne;
