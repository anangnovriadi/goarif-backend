"use strict";

module.exports = {
  up: async queryInterface =>
    queryInterface.bulkInsert(
      "tests",
      [
        {
          name: "test",
          description: "lorem ipsum",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "test 2",
          description: "lorem ipsum",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    ),
  down: async queryInterface => {}
};
