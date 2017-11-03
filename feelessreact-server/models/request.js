module.exports =  (sequelize, DataTypes) => {
	const Requests = sequelize.define('Requests', {
		matched_user_id: DataTypes.INTEGER,
		request_date: DataTypes.DATE,
		matched_date: DataTypes.DATE,
		transaction_amt: DataTypes.DOUBLE,
		status: DataTypes.BOOLEAN,
		from_country: DataTypes.STRING,
		to_country: DataTypes.STRING,
		split_money: DataTypes.BOOLEAN,
		minimum_amount: DataTypes.DOUBLE,
		exchange_in_person: DataTypes.BOOLEAN
	});

	Requests.associate = (models) => {
		models.Requests.belongsTo(models.Users);
	}
	return Requests;
}