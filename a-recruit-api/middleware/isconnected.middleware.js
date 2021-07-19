const Jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config({path: './.env'}); 
const TOKEN = process.env.TOKEN;

exports.authenticated = (fn) => async (req,res)=>{

    Jwt.verify(req.header.authorization, TOKEN, async function(err, decoded) {
        
        if(!err && decoded){
            return await fn(req,res);
        }
        res.status(401).json({message : " Désolé vous n'êtes pas connecté"})
    });
    
};