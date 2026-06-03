import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken'

import User from "../models/User.js";

export const login = async (req: Request, res: Response, next: NextFunction) => {

    try {
        // zod  validation: 

        let user = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (user) {
            let hashedPw = user?.getDataValue("password");
            let userInfo = user?.toJSON();
            delete userInfo?.password;
            let matched = await bcrypt.compare(req.body.password, hashedPw);

            if (matched) {

                const token = jwt.sign(userInfo, 'shhhhh');
                return res.send({
                    msg: "login success",
                    user: userInfo,
                    token: token
                })
            }
        }
        res.status(401).send({
            msg: "Invalid creadentials"
        })
    } catch (err) {
        next(err)
        // console.log(err)
        // res.status(500).send({
        //     msg: "Server Error. please try again later.."
        // })
    }
}


export const signup = async (req: Request, res: Response, next: NextFunction) => {

    /* 
        {
            
            msg:"bad requirst",
            errors: [
            {
                field:"firstName",
                msg:"required require"
            }]   
        }
    */

    try {

        let hashedPw = await bcrypt.hash(req.body.password, 10);

        await User.create({
            firstName: req.body.firstName || null,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPw,
            isSeller: req.body.isSeller
        })
        res.send('signup!')
    }
    catch (err) {
        next(err)
    }

    // } catch (err) {
    //     console.log(err);
    //     res.status(500).send({
    //         msg: "Server Errror",
    //         error: err
    //     })
    // }

}


export const getUser = async (req: Request, res: Response) => {

    console.log("req.user", req.user)

    let user = await User.findByPk(req.user?.id)

    if (user) {
        return res.send(user)
    }

    res.status(401).send(user)

}

