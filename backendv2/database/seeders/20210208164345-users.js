const bcrypt = require("bcrypt");
("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Users", [
      {
        email: "test1@mail.ru",
        firstName: "Gleb",
        lastName: "Valentyuk",
        password: bcrypt.hashSync("password", 10),
      },
      {
        email: "test2@mail.ru",
        firstName: "dima",
        lastName: "grabar",
        password: bcrypt.hashSync("password", 10),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
