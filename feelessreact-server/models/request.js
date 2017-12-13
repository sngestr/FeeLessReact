module.exports =  (sequelize, DataTypes) => {
	const Requests = sequelize.define('Requests', {
		matched_user_id: {
			type: DataTypes.INTEGER,
		},
		request_date: {
			type: DataTypes.DATE,
		},
		matched_date: {
			type: DataTypes.DATE,
		},
		transaction_amt: {
			allowNull: false,
			type: DataTypes.DOUBLE,
		},
		status: {
			type: DataTypes.BOOLEAN,
		},
		from_country: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		to_country: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		split_money: {
			type: DataTypes.BOOLEAN,
		},
		minimum_amount: {
			type: DataTypes.DOUBLE,
		},
		exchange_in_person: {
			type: DataTypes.BOOLEAN,
		},
	});
	Requests.associate = (models) => {
		models.Requests.belongsTo(models.Users);
	}
	return Requests;
}