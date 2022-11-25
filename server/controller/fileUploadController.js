const firUpload  = require("../models/uploadModel.js");
const multer  = require('multer');


const uploadFile=(req,res)=>{
   const upload=multer({dest:'uploads/'});

   upload.single('image')
}


module.exports=uploadFile