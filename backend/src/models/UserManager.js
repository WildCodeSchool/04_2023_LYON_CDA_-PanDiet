const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findByEmailWithPassword(email) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [email]
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, avatar, email, password) values (?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.avatar,
        user.email,
        user.hashedPassword,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, city = ?, language = ?, hashedPassword = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.city,
        user.hashedPassword,
        user.id,
      ]
    );
  }

  updateUserAvatar(user) {
    return this.connection.any(
      `update ${this.table} set avatar = ? where id = ?`,
      [user.avatar, user.id]
    );
  }
}

module.exports = UserManager;
