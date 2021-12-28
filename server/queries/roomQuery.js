exports.getRoom = "select * from room where r_password = ?";
exports.setRoom = "insert into room values(?, now())";