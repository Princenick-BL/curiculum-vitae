const psql = require("../configs/db.js");

// constructor
const Company = function(company) {
  this.company_id=company.company_id;
  this.company_name = company.company_name;
  this.company_nationality = company.company_nationality;
  this.company_phone_number = company.company_phone_number;
  this.company_headquarters = company.company_headquarters;
  this.company_address = company.company_address;
  this.company_department = company.company_department;
  this.company_city = company.company_city;
  this.company_rcs = company.company_rcs;
  this.company_zip_code = company.company_zip_code;
  this.company_country = company.company_country;
  this.company_representative_id = company.company_representative_id;
  this.company_representative_status = company.company_representative_status;
  this.is_partner = company.is_partner;
  this.partner_type = company.partner_type;
  this.consultant_id = company.consultant_id;
  this.company_presentation_pdf = company.company_presentation_pdf;
  this.company_presentation_video = company.company_presentation_video;
};

Company.createCompany =(user_id,result)=>{
  psql.query('INSERT INTO company (company_representative_id) VALUES ($1) RETURNING company_id',[user_id],
  (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null,res);
  });
}

Company.updateCompanyInfo = (company,result)=>{ 

  psql.query('UPDATE company SET'+
  ' company_name =$2 , company_nationality = $3 , company_address= $4 , company_department = $5 , company_representative_status = $6 , company_phone_number= $7 , company_headquarters = $8 , company_city = $9 , company_rcs = $10 , company_zip_code =$11 , company_country = $12 , is_partner = $13 , partner_type = $14 ,consultant_id =$15 ,company_presentation_pdf = $16 , company_presentation_video = $17 WHERE company_id = $1 RETURNING company_id',
  [
    company.company_id,
    company.company_name,
    company.company_nationality,
    company.company_address,
    company.company_department,
    company.company_representative_status,
    company.company_phone_number,
    company.company_headquarters,
    company.company_city,
    company.company_rcs,
    company.company_zip_code,
    company.company_country,
    company.is_partner,
    company.partner_type,
    company.consultant_id,
    company.company_presentation_pdf,
    company.company_presentation_video
  ], 
  (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null,res);
  });
}

Company.getCompanyInfo = (user_id,result)=>{
  psql.query('SELECT * FROM company WHERE company_representative_id = $1',[user_id],
  (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null,res);
  });
}

module.exports = Company;