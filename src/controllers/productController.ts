import { Request, Response, NextFunction } from "express";
import { Product } from "../models"; 
import { ResponseError } from "../utils/errorResponse";
import { productValidation } from "../validations/productValidation";

export class ProductController {
    static async list(req: Request, res: Response, next: NextFunction) {
        try {
            const products = await Product.findAll();
            return res.status(200).json({
                message: "success",
                data: products
            });
        } catch (e) {
            next(e);
        }
    }

    static async detail(req: Request, res: Response, next: NextFunction) {
        try {
            const product = await Product.findOne({
                where: {
                    id: req.params.id
                }
            });

            if (!product) {
                throw new ResponseError(404, "Product not found");
            }

            return res.status(200).json({
                message: "success",
                data: product
            });
        } catch (e) {
            next(e);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { value, error } = productValidation(req.body);

            if (error) {
                throw new ResponseError(400, error?.details[0].message);
            }

            await Product.create(value);

            return res.status(201).json({
                message: "success",
                data: value
            })
        } catch (e) {
            next(e);
        }
    }
}
