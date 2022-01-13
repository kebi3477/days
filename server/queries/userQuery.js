exports.getUser = "select * from user where u_id = ?";
exports.updateUser = "update user set u_name = ?, u_birth = ?, u_img = ? where u_id = ?";
exports.getUsers = "select * from user u join room r on r.r_password = u.r_password where r.r_password = ?";