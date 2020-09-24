'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('Carts',{
      fields: ['UserId'],
      type: 'foreign key',
      name: 'custom_fk_UserId',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete : 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('Users', 'custom_fk_UserId')
  }
};
