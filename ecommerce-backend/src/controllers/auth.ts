import bcrypt from "bcrypt";
import { Request, Response } from "express"
import User from "../models/User.js";

export const login = (req: Request, res: Response) => {

    // zod  validation: 


    let user = User.findOne({
        where: {
            email: req.body.email
        }
    })

    // @ts-ignore
    let matched = bcrypt.compare(req.body.password, hash);

    // generate jwt token 

    res.send('login!')



    res.status(401).send({
        msg: "Invalid creadentials"
    })

}


export const signup = async (req: Request, res: Response) => {

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
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPw
        })
        res.send('signup!')

    } catch (err) {
        console.log(err);
        res.status(500).send({
            msg: "Server Errror",
            error: err
        })
    }

}

