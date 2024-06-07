'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('types', [
      {
        name: `Male`,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: `Female`,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Children',
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('types', null, {});
  },
};
