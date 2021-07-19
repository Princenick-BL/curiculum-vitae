const Jobs = require("../models/jobs.models.js");


exports.getFillededJob = (req,res)=>{

    const company_id = req.body.company_id

    Jobs.getFillededJob(company_id,(err, data) => {
  
        if (err){
  
          res.json(err || {err:401});
  
        }else res.json(data.rows);
  
    });
  
}

exports.getUnFillededJob = (req,res)=>{

    const company_id = req.body.company_id

    Jobs.getUnFillededJob(company_id,(err, data) => {
  
        if (err){
  
          res.json(err || {err:401});
  
        }else res.json(data.rows);
  
    });
  
}

exports.getFillededJobLimit4 = (req,res)=>{

    const company_id = req.body.company_id

    Jobs.getFillededJobLimit4(company_id,(err, data) => {
  
        if (err){
  
          res.json(err || {err:401});
  
        }else res.json(data.rows);
  
    });
  
}

exports.getUnFillededJobLimit4 = (req,res)=>{

    const company_id = req.body.company_id

    Jobs.getUnFillededJobLimit4(company_id,(err, data) => {
  
        if (err){
  
          res.json(err || {err:401});
  
        }else res.json(data.rows);
  
    });
  
}

exports.createjob = (req, res) => {
    


    const AWS = require('../configs/aws')

    var jobInfoFiles =[{presentation_pdf:req.body.job_presentation_pdf},{presentation_vide:req.body.job_presentation_video}]
    var uploadedUrl = []
    
    console.log(req.body.job_presentation_pdf)

    let file =  req.body.job_presentation_pdf.buffer;
    let base64 =  file.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    var buffer = new Buffer.from(base64[2],'base64');

    const params ={
        Bucket : AWS.Bucket,
        Key:`${req.body.job_presentation_pdf.id}/${req.body.job_presentation_pdf.fileName}`,
        Body: buffer,
    }

    AWS.s3.upload(params,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        res.status(200).send(data)
    })
    


    /*
    const newJob = new Jobs ({

        job_title : req.body.job_title,
        job_contract_type : req.body.job_contract_type,
        job_presentation_pdf : req.body.job_presentation_pdf,
        job_presentation_video : req.body.job_presentation_video,
        job_country : req.body.job_country,
        job_department : req.body.job_department,
        job_city : req.body.job_city,
        job_zip_code : req.body.job_zip_code,
        job_required_level : req.body.job_required_level,
        job_required_grad : req.body.job_required_grad,
        job_required_experience : req.body.job_required_experience,
        job_creator_id : req.body.job_creator_id,
        job_origin : req.body.job_origin,
        job_statut : req.body.job_status
    });
   
    Jobs.createjob(newJob, (err, data) => {

        if (err){

            res.status(500).json({
              message:
                err.message || "Une erreur pendant l'ajout à la base de donnée"
            });
    
          }else res.json(data.rows);
    });*/
    
};

