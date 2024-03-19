import Joi from "joi";
import { Request } from "express";

export const productValidation = (body: Request) => {
    let schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().optional(),
        isActive: Joi.boolean().optional(),
    });

    const { value, error } = schema.validate(body);

    return {
        value: value,
        error: error
    }
}
