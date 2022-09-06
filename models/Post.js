const { get } = require("node-emoji");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    // body: {
    //   type: DataTypes.BLOB,
    //   get() {
    //     return this.getDataValue("body").toString("utf8");
    //   },
    // },
    body : {
        type: DataTypes.STRING
    }
  },
  {
    sequelize,
  }
);

module.exports = Post;
