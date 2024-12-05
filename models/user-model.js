const db = require('../config/db');

const getAllUsers = async () => {
    const [rows] = await db.query('select * from users');
    return rows;
};

const getUserById = async (id) => {
    const[row] = await db.query('select * from user where id=?',id);
    return row;
}

module.exports = {getAllUsers, getUserById};