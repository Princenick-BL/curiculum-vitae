const psql = require("../configs/db.js");
// constructor
const User_info = function(user) {
    this.user_info_id = user.user_info_id;
    this.user_nationality = user.user_nationality;
    this.user_phone_number= user.user_phone_number;
    this.user_address = user.user_address;
    this.user_department= user.user_department;
    this.user_city = user.user_city;
    this.user_zip_code = user.user_zip_code;
    this.user_country = user.user_country;
    this.user_id= user.user_id;
};

User_info.getConsultantByDepartment = (departement, result) => {
  
    psql.query("SELECT users.user_id,user_name FROM user_info JOIN users ON user_info.user_id =users.user_id WHERE user_department= $1",
    [departement],
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      result(null,res.rows);
    });
};

User_info.getConsultantCalendly = (consultant_id, result) => {
  
  psql.query("SELECT user_calendly FROM user_info  WHERE user_id = $1",
  [consultant_id],
  (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null,res.rows[0]);
  });
};

module.exports = User_info;
  