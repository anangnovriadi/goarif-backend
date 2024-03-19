import { Request } from "express";

export interface AuthRequest extends Request {
    userToken?: string;
}

export interface AuthPayload {
    id: number;
    email: string;
    username: string;
}
