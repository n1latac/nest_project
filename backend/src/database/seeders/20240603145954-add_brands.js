'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('brands', [
      {
        name: 'Adidas',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Nike',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Asics',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'New Balance',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Fila',
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('brands', null, {});
  },
};
