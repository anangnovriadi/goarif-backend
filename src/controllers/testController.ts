import { Request, Response, NextFunction } from "express";
import { generateTokenSecret } from "../utils/middleware";

export class TestController {
    static async createSecretToken(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(generateTokenSecret());
        } catch (e) {
            next(e);
        }
    }

    static async checkHealth(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json({
                message: "Good"
            });
        } catch (e) {
            next(e);
        }
    }
}
