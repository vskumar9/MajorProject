import path from "path"
import express from "express"
import multer from "multer"

var storage = multer.diskStorage({
    destination: function(req, file, cd){
        cd(null, '../uploads/')
    },
    filename: function(req, file, cd){
        let ext = path.extname(file.originalname)
        cd(null, Date.now() + ext)
    }
})


var upload = multer({
    storage: storage,
    fileFilter: function(req, file, callback){
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg"
        ){
            callback(null, true)
        } else{
            console.log('only jpg & png file supported!')
            callback(null,false)
        }
    },
    limits: {
        fieldSize: 1024 * 1024 * 2
    }
})

export default upload;