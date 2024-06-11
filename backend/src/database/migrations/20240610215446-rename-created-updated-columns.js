'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('types', 'createdAt', 'created_at');
    await queryInterface.renameColumn('types', 'updatedAt', 'updated_at');
    await queryInterface.renameColumn('brands', 'createdAt', 'created_at');
    await queryInterface.renameColumn('brands', 'updatedAt', 'updated_at');
    await queryInterface.renameColumn('devices', 'createdAt', 'created_at');
    await queryInterface.renameColumn('devices', 'updatedAt', 'updated_at');
    await queryInterface.renameColumn(
      'basket_devices',
      'createdAt',
      'created_at',
    );
    await queryInterface.renameColumn(
      'basket_devices',
      'updatedAt',
      'updated_at',
    );
    await queryInterface.renameColumn('baskets', 'createdAt', 'created_at');
    await queryInterface.renameColumn('baskets', 'updatedAt', 'updated_at');
    await queryInterface.renameColumn('device_info', 'createdAt', 'created_at');
    await queryInterface.renameColumn('device_info', 'updatedAt', 'updated_at');
    await queryInterface.renameColumn('rating', 'createdAt', 'created_at');
    await queryInterface.renameColumn('rating', 'updatedAt', 'updated_at');
    await queryInterface.renameColumn('type_brand', 'createdAt', 'created_at');
    await queryInterface.renameColumn('type_brand', 'updatedAt', 'updated_at');
    await queryInterface.renameColumn('users', 'createdAt', 'created_at');
    await queryInterface.renameColumn('users', 'updatedAt', 'updated_at');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('types', 'created_at', 'createdAt');
    await queryInterface.renameColumn('types', 'updated_at', 'updatedAt');
    await queryInterface.renameColumn('brands', 'created_at', 'createdAt');
    await queryInterface.renameColumn('brands', 'updated_at', 'updatedAt');
    await queryInterface.renameColumn('devices', 'created_at', 'createdAt');
    await queryInterface.renameColumn('devices', 'updated_at', 'updatedAt');
    await queryInterface.renameColumn(
      'basket_devices',
      'created_at',
      'createdAt',
    );
    await queryInterface.renameColumn(
      'basket_devices',
      'updated_at',
      'updatedAt',
    );
    await queryInterface.renameColumn('baskets', 'created_at', 'createdAt');
    await queryInterface.renameColumn('baskets', 'updated_at', 'updatedAt');
    await queryInterface.renameColumn('device_info', 'created_at', 'createdAt');
    await queryInterface.renameColumn('device_info', 'updated_at', 'updatedAt');
    await queryInterface.renameColumn('rating', 'created_at', 'createdAt');
    await queryInterface.renameColumn('rating', 'updated_at', 'updatedAt');
    await queryInterface.renameColumn('type_brand', 'created_at', 'createdAt');
    await queryInterface.renameColumn('type_brand', 'updated_at', 'updatedAt');
    await queryInterface.renameColumn('users', 'created_at', 'createdAt');
    await queryInterface.renameColumn('users', 'updated_at', 'updatedAt');
  },
};
