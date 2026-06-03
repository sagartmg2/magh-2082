import { ConnectionError, UniqueConstraintError, ValidationError } from 'sequelize'
import { NextFunction, Request, Response } from "express"


export const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {

    console.log("error recieved", err);

    if (err instanceof ValidationError || err instanceof UniqueConstraintError) {
        let errors = err.errors.map(el => {
            return {
                field: el.path,
                message: el.message
            }
        })
        return res.status(400).send({
            msg: "BAD request",
            errors: errors
        })
    } else if (err instanceof ConnectionError) {
        return res.status(503).send({
            msg: err.message
        })
    }

    let errObj = {
        msg: "server error",
        error: "",
        stack: ""
    }

    if (process.env.APP_ENV != 'production') {
        errObj.error = err.message
        errObj.stack = err.stack;
    }
    res.status(500).send(errObj)
}