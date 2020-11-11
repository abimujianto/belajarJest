const axios = require("axios");

class users {
  static async all() {
    let res = await axios.get("http://localhost:3000/users");
    return res;
  }
}

module.exports = users;
