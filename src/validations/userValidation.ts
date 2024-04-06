import Joi from "joi";
import { Request } from "express";

export const registerValidation = (body: Request) => {
    let schema = Joi.object({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    const { value, error } = schema.validate(body);

    return {
        value: value,
        error: error
    }
}

export const loginValidation = (body: Request) => {
    let schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    const { value, error } = schema.validate(body);

    return {
        value: value,
        error: error
    }
}
