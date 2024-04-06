import { Request, Response, NextFunction } from "express";
import { Transcript } from "../models"; 
import { ResponseError } from "../utils/errorResponse";
import { productValidation } from "../validations/productValidation";

export class TranscribeController {
    static async getTranscribes(req: Request, res: Response, next: NextFunction) {
        try {
            const transcribes = await Transcript.findAll({
                attributes: ['id', 'deepgramId', 'status', 'fileName', 'createdAt', 'updatedAt']
            });

            return res.status(200).json({transcribes});
        } catch (e) {
            next(e);
        }
    }

    static async getTranscribe(req: Request, res: Response, next: NextFunction) {
        try {
            const transcribe = await Transcript.findOne({
                where: {
                    id: 9
                }
            });

            let json = [];

            if (transcribe?.status === 'Success') {
                for (let i = 0; i < transcribe?.result?.paragraph?.length; i++) {
                    json.push(transcribe?.result?.paragraph[i])
                }
            }

            return res.status(200).json({
                message: "success",
                data: json
            });
        } catch (e) {
            next(e);
        }
    }
}
