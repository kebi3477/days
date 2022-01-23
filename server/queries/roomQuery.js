exports.getRoom = "select * from room where r_password = ?";
exports.setRoom = "insert into room values(?, now())";
exports.updateRoomWord = "update room set r_word = ? where r_password = ?";
exports.updateRoomDate = "update room set r_sdate = ? where r_password = ?";