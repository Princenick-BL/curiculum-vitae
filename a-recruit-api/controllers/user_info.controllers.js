const User_info = require("../models/user_info.models.js");

exports.getConsultantByDepartment = (req,res)=>{

    const departement = req.body.company_department;
  
    User_info.getConsultantByDepartment(departement,(err, data) => {
  
      if (err){
        res.status(500).json({
          message:
            err.message || "Une erreur pendant le test de la base de donnée."
        });
  
      }else res.json(data);
  
    });
  
}

exports.getConsultantCalendly = (req,res)=>{

  const consultant_id = req.body.consultant_id;

  User_info.getConsultantCalendly(consultant_id,(err, data) => {

    if (err){
      res.status(500).json({
        message:
          err.message || "Une erreur pendant le test de la base de donnée."
      });

    }else res.json(data);

  });

}