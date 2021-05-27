"use strict";
const bcryptjs = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Luiz",
          email: "luiz1@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Luiz 2",
          email: "luiz2@gmail.com",
          password_hash: await bcryptjs.hash("987654", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Luiz 3",
          email: "luiz3@gmail.com",
          password_hash: await bcryptjs.hash("234561", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async () => {},
};
