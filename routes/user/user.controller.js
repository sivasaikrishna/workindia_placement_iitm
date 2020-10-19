var connection = require('../../config/connection');

module.exports = {
  userLogin: (req, res) => {
    const { username, password } = req.body;
    if (username && password && username.length > 0 && password.length > 0) {
      let checkQuery = `SELECT * from users where username = ? and password = ?`;
      connection.query(checkQuery, [username, password], (err, rows, fields) => {
        if (err) {
          console.log('err', err);
          return res.status(400).json({ 'err': 'Internal error' });
        };

        if (rows.length == 0) {
          // No rows matching username and password
          return res.json({ status: 'Incorrect username or password' });
        } else {
          // success
          return res.json({ status: 'success', userId: rows[0].id });
        }
      });
    } else {
      // username or password is empty
      return res.json({ 'status': 'Username or password is empty' });
    };
  },
  userRegister: (req, res) => {
    const { username, password } = req.body;
    if (username && password && username.length > 0 && password.length > 0) {
      let createQuery = `insert into users(id, username, password) values(?, ?, ?)`;
      connection.query(createQuery, [null, username, password], (err, rows, fields) => {
        if (err) {
          // error handling
          console.log('err', err);
          if (err.code = 'ER_DUP_ENTRY') {
            // Username already exists
            return res.json({ 'status': 'Username already exists' });
          } else {
            return res.status(400).json({ 'err': 'Internal error' });
          }
        } else {
          // Successfully created user account
          return res.json({ status: 'account created' });
        }
      });
    } else {
      // username or password is empty
      return res.json({ 'status': 'Username or password is empty' });
    };
  },
}