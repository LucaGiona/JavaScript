const { json } = require("express");
const fs = require ("fs");
const crypto = require("crypto");
const { receiveMessageOnPort } = require("worker_threads");
const util = require("util");
const Repository = require("./repository")

const scrypt = util.promisify(crypto.scrypt);

class UserRepository extends Repository {
  async comparePasswords(saved, supplied) {
    //Saved --> password saved inour database "hashed.salt"
    // Supplied --> password given to us by a user trying sign in
    const [hashed, salt] = saved.split(".");
    const hashSuppliedBuf = await scrypt(supplied, salt, 64);

    return hashed === hashSuppliedBuf.toString("hex");
  }

  async create(attrs) {
    attrs.id = this.randomId();
    //{ attrs === {email: "", password: ""}}
    const salt = crypto.randomBytes(8).toString("hex");
    const buf = await scrypt(attrs.password, salt, 64);

    const records = await this.getAll();
    const record = {
      ...attrs,
      password: `${buf.toString("hex")}.${salt}`,
    };
    records.push(record);

    //debugging
    console.log("Creating new user:", record)

    await this.writeAll(records);

    return record;
  }
}

module.exports = new UserRepository("users.json");
