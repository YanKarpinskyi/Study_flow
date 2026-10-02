import { type Request, type Response } from "express";

export const notFoundHandler = (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
};