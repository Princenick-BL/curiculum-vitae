module.exports = app => {

    const job = require("../controllers/jobs.controllers.js");
    
    const multer = require('multer')
    const storage = multer.memoryStorage({
        destination: function (req, file, callback) {
            callback(null, '')
        }
    })

    var upload = multer({ storage}).single('file')

    app.post("/getUnFillededJob",job.getUnFillededJob);

    app.post("/getFillededJob",job.getFillededJob);

    app.post("/getUnFillededJobLimit4",job.getUnFillededJobLimit4);

    app.post("/getFillededJobLimit4",job.getFillededJobLimit4);

    app.post("/createJob",upload,job.createjob);



  
};