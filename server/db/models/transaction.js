'use strict';

module.exports = function(sequelize, DataTypes) {
	const Transaction = sequelize.define(
		'Transaction',
		{
			amount: {
				type: DataTypes.DOUBLE,
				allowNull: false
			},
			fee: {
				type: DataTypes.DOUBLE,
				defaultValue: 0
			},
			address: {
				type: DataTypes.STRING,
				defaultValue: ''
			},
			transaction_id: {
				type: DataTypes.STRING,
				allowNull: false
			},
			status: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
			},
			dismissed: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
			},
			rejected: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
			},
			processing: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
			},
			waiting: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
			},
			description: {
				type: DataTypes.STRING,
				defaultValue: ''
			},
			type: {
				type: DataTypes.ENUM('deposit', 'withdrawal'),
				allowNull: false
			},
			currency: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			underscored: true
		}
	);

	Transaction.associate = (models) => {
		Transaction.belongsTo(models.User, {
			foreignKey: 'user_id'
		});
	};

	return Transaction;
};
