import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import axios from 'axios'

import users from '../models/auth.js'

export const signup = async (req, res) => {
    if (req.body.googleAccessToken) {
    try{
            const {googleAccessToken} = req.body;
            axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {headers: {"Authorization": `Bearer ${googleAccessToken}`}})
                .then(async response => {
                    // const firstName = response.data.given_name;
                    const name = response.data.given_name;
                    const email = response.data.email;
                    const picture = response.data.picture;
                    const existingUser = await users.findOne({email})
                    if (existingUser) {
                        return res.status(400).json({message: "User already exist!"})
                    }
                    const newUser = await users.create({verified:"true", name, email, profilePicture: picture})
                    const token = jwt.sign({email: newUser.email, id: newUser._id}, process.env.JWT_SECRET, {expiresIn: "1h"})
                    res.status(200).json({result: newUser, token})})
    }  catch(error){
        res.status(500).json({msg: "Invalid access token!"})
    }
    } else {
        const { name, email, password } = req.body;
    try{
        if (email === "" || password === "" || name === ""  && password.length >= 4) 
                return res.status(400).json({message: "Invalid field!"})
        const existinguser = await users.findOne({ email });
        if(existinguser){
            return res.status(404).json({ message: "User already Exist."})
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await users.create({ name, email, password: hashedPassword }) 
        const token = jwt.sign({ email: newUser.email, id:newUser._id}, process.env.JWT_SECRET , { expiresIn: '1h'});
        res.status(200).json({ result: newUser, token })
    } catch(error){
        res.status(500).json("Something went worng...")
    }
}
}

export const login = async (req, res) => {


    if(req.body.googleAccessToken){
        // gogole-auth
        const {googleAccessToken} = req.body;

        axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {headers: {"Authorization": `Bearer ${googleAccessToken}`}})
            .then(async response => {
                // const firstName = response.data.given_name;
                const name = response.data.given_name;
                const email = response.data.email;
                const picture = response.data.picture;

                const existingUser = await users.findOne({email})

                if (!existingUser) 
                return res.status(404).json({message: "User don't exist!"})

                const token = jwt.sign({email: existingUser.email,id: existingUser._id}, process.env.JWT_SECRET, {expiresIn: "1h"})
                res.status(200).json({result: existingUser, token})}).catch(err => {
                res.status(400).json({message: "Invalid access token!"})
            })
    }else{
        const { email, password } = req.body;
        if (email === "" || password === "") 
        return res.status(400).json({message: "Invalid field!"});
    try {
        const existinguser = await users.findOne({ email });
        if(!existinguser){
            return res.status(404).json({ message: "User don't Exist."})
        }

        const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
        if(!isPasswordCrt){
            return res.status(400).json({message : "Invalid credentials"})
        }
        const token = jwt.sign({ email: existinguser.email, id:existinguser._id}, process.env.JWT_SECRET , { expiresIn: '1h'});
        res.status(200).json({ result: existinguser, token })
    } catch (error)  {
        res.status(500).json("Something went worng...")
    }
}
}

