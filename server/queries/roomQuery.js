exports.getRoom = "select * from room where r_password = ?";
exports.setRoom = "insert into room values(?, now())";
exports.updateRoom = "update room set r_word = ? where r_password = ?";