const psql = require("../configs/db.js");

// constructor
const Jobs = function (job) {
  
  this.job_id = job.job_id;
  this.job_title = job.job_title;
  this.job_contract_type = job.job_contract_type;
  this.job_presentation_pdf = job.job_presentation_pdf;
  this.job_presentation_video = job.job_presentation_video;
  this.job_country = job.job_country;
  this.job_department = job.job_department;
  this.job_city = job.job_city;
  this.job_zip_code = job.job_zip_code;
  this.job_required_level = job.job_required_level;
  this.job_required_grad = job.job_required_grad;
  this.job_required_experience = job.job_required_experience;
  this.job_creator_id = job.job_creator_id;
  this.job_origin = job.job_origin;
  this.job_hire = job.job_hire;
};

Jobs.getFillededJob = (company_id, result) => {
  
  psql.query("SELECT job_title,to_char(created_at, 'TMDay TMDD TMmonth YYYY') as created_at,job_hire FROM jobs WHERE job_creator_id = $1 AND job_statut = $2",
  [company_id,1],
  (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null,res);
  });

};

Jobs.getUnFillededJob = (company_id, result) => {
  
  psql.query("SELECT job_title,to_char(created_at, 'TMDay TMDD TMmonth YYYY') as created_at,job_hire FROM jobs WHERE job_creator_id = $1 AND job_statut = $2",
  [company_id,0],
  (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null,res);
  });

};


Jobs.getFillededJobLimit4 = (company_id, result) => {
  
  psql.query("SELECT job_title,to_char(created_at, 'TMDay TMDD TMmonth YYYY') as created_at,job_hire FROM jobs WHERE job_creator_id = $1 AND job_statut = $2 ORDER BY created_at LIMIT 4",
  [company_id,1],
  (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null,res);
  });

};

Jobs.getUnFillededJobLimit4 = (company_id, result) => {

  psql.query("SELECT job_title,to_char(created_at, 'TMDay TMDD TMmonth YYYY') as created_at,job_hire FROM jobs WHERE job_creator_id = $1 AND job_statut = $2 ORDER BY created_at LIMIT 4;",
  [company_id,0],
  (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null,res);
  });

};


Jobs.createjob = (newJob, result) => {

  psql.query('INSERT INTO jobs (job_title,job_contract_type,job_presentation_pdf,job_presentation_video,job_country,job_department,job_city,job_zip_code,job_required_level,job_required_grad, job_required_experience, job_creator_id, job_origin) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING job_id;',
    [newJob.job_title,newJob.job_contract_type,newJob.job_presentation_pdf,newJob.job_presentation_video,newJob.job_country, newJob.job_department, newJob.job_city, newJob.job_zip_code, newJob.job_required_level, newJob.job_required_grad, newJob.job_required_experience, newJob.job_creator_id, newJob.job_origin], 
    (err, res) => {
      if (err) {
        result(err, null); 
        return;
      }
      result(null,res);
  });
}



module.exports = Jobs;
