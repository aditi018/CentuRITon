const express = require('express')
const router = express.Router()
const fileUploadController = require("../controller/fileUploadController.js")

router.post("/fileUpload", fileUploadController)

module.exports = router
