module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define('Users', {
		first_name: DataTypes.STRING,
		last_name: DataTypes.STRING,
		email: DataTypes.STRING,
		password_hash: DataTypes.STRING
	});

	Users.associate = (models) => {
		models.Users.hasMany(models.Requests);
	}
	return Users;
}