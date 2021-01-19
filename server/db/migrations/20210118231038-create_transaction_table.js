'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			'Transactions',
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER
				},
				amount: {
					type: Sequelize.DOUBLE,
					allowNull: false
				},
				fee: {
					type: Sequelize.DOUBLE,
					defaultValue: 0
				},
				address: {
					type: Sequelize.STRING,
					defaultValue: ''
				},
				transaction_id: {
					type: Sequelize.STRING,
          allowNull: false,
          unique: true
				},
				status: {
					type: Sequelize.BOOLEAN,
					defaultValue: false
				},
				dismissed: {
					type: Sequelize.BOOLEAN,
					defaultValue: false
				},
        rejected: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        processing: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        waiting: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        description: {
          type: Sequelize.STRING,
          defaultValue: ''
        },
        type: {
          type: Sequelize.ENUM('deposit', 'withdrawal'),
          allowNull: false
        },
        currency: {
          type: Sequelize.STRING,
          allowNull: false
        }
			},
			{
				timestamps: true,
				underscored: true
			}
		);
	},
	down: (queryInterface, Sequelize) => queryInterface.dropTable('Transactions')
};